"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var treegrid_component_1 = require("../../treegrid/treegrid.component");
/****************************************************************************************************************/
/* Calling ajax to retrieve children when the user click open a branch                                          */
/****************************************************************************************************************/
var LazyLoadDemoComponent = (function () {
    function LazyLoadDemoComponent() {
        this.treeDef = new treegrid_component_1.TreeGridDef();
    }
    LazyLoadDemoComponent.prototype.ngOnInit = function () {
        this.treeDef.hierachy = {
            foreignKeyField: "report_to", primaryKeyField: "emp_id"
        };
        this.treeDef.filter = true;
        this.treeDef.ajax = {
            url: 'http://treegriddemoservice.azurewebsites.net/api/values/GetEmployees', method: "POST",
            //url: 'http://localhost:7774/api/values/GetEmployees', method: "POST",
            lazyLoad: true,
            childrenIndicatorField: 'hasChildren'
        };
        this.treeDef.pageSize = 30;
        this.treeDef.columns = [
            { labelHtml: "Given name", dataField: "firstname" },
            { labelHtml: "Family name", dataField: "lastname", className: "tg-body-center tg-header-center" },
            { labelHtml: "Date of Birth", dataField: "dob" },
            { labelHtml: "Employee ID", dataField: "emp_id" },
            { labelHtml: "Report To", dataField: "report_to" }];
    };
    __decorate([
        core_1.ViewChild(treegrid_component_1.TreeGrid), 
        __metadata('design:type', treegrid_component_1.TreeGrid)
    ], LazyLoadDemoComponent.prototype, "treeGrid", void 0);
    LazyLoadDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <h2>Lazy Loading with Ajax</h2>\n    <h3>Description</h3>\n    Features included:\n    <ul>\n        <li>Loading table with Ajax</li>\n        <li>If <strong>lazyLoad</strong> is true, only the top level nodes are loaded initially; children nodes are loaded only when you expand the parent row. If it is set to false, all nodes are loaded</li>    \n        <li><strong>childrenIndicatorField</strong> is the data field that TreeGrid will use to determine whether to display the expand/collapse icon</li>    \n    </ul>\n    \n<ul class=\"nav nav-tabs\">\n  <li class=\"active\"><a data-toggle=\"tab\" href=\"#demoTab\">Demo</a></li>\n  <li><a data-toggle=\"tab\" href=\"#srcTab\">Code</a></li>\n</ul>    \n\n<div class=\"tab-content\">\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"srcTab\">\n    <iframe class=\"code-block\" src=\"/app/demo/lazy-load/code.html\"></iframe>\n</div>\n\n<div role=\"tabpanel\" class=\"tab-pane active\" id=\"demoTab\">\n    <tg-treegrid [treeGridDef]=\"treeDef\">\n    </tg-treegrid>\n</div>\n\n</div>    \n    ",
            directives: [treegrid_component_1.TreeGrid]
        }), 
        __metadata('design:paramtypes', [])
    ], LazyLoadDemoComponent);
    return LazyLoadDemoComponent;
}());
exports.LazyLoadDemoComponent = LazyLoadDemoComponent;
//# sourceMappingURL=lazy-load-demo.component.js.map