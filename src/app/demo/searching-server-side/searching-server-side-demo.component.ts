import { Component, Directive, OnInit, ViewChild, Pipe, PipeTransform, } from "@angular/core";
import { DatePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { TreeGrid, TreeGridDef } from "../../treegrid/treegrid.component";

declare var hljs: any;

@Component({
    moduleId: module.id,
    template: `
    <h2>Server-side Search</h2>
    <h3>Description</h3>
    Features included:
    <ul>
        <li>Using server-side logic to filter data</li>
    </ul>
    
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#demoTab">Demo</a></li>
  <li><a data-toggle="tab" href="#srcTab">Code</a></li>
</ul>    

<div class="tab-content">
<div role="tabpanel" class="tab-pane" id="srcTab">
    <iframe class="code-block" src="/app/demo/searching-server-side/code.html"></iframe>
</div>

<div role="tabpanel" class="tab-pane active" id="demoTab">
    <tg-treegrid [treeGridDef]="treeDef">
    </tg-treegrid>
</div>
</div>
    `,
    directives: [TreeGrid]
})
export class SearchingServerSideDemoComponent implements OnInit {
    @ViewChild(TreeGrid)
    private treeGrid: TreeGrid;
    treeDef: TreeGridDef = new TreeGridDef();

    ngOnInit() {
        this.treeDef.pageSize = 10;
        this.treeDef.hierachy = {
            foreignKeyField: "report_to", primaryKeyField: "emp_id"
        };
        this.treeDef.filter = {
            url: "http://treegriddemoservice.azurewebsites.net/api/values/Search",
            method: "POST"
        }
        this.treeDef.ajax = {
            url: 'http://treegriddemoservice.azurewebsites.net/api/values/GetEmployees', 
            method: "POST",
            lazyLoad: true,
            childrenIndicatorField: 'hasChildren'
        };
        this.treeDef.columns = [
            { labelHtml: "Employee ID", dataField: "emp_id", filterable: false },
            { labelHtml: "Given name", dataField: "firstname" },
            { labelHtml: "Family name", dataField: "lastname" },
            { labelHtml: "Origin", dataField: "origin" }];
    }
}