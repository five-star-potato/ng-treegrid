import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JSONP_PROVIDERS } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './demo/home/home.component';
import { BasicDemoComponent }   	from './demo/basic/basic-demo.component';
import { AjaxLoadDemoComponent }   	from './demo/ajax-load/ajax-load-demo.component';
import { LazyLoadDemoComponent }   	from './demo/lazy-load/lazy-load-demo.component';
import { PipesDemoComponent }   	from './demo/pipes/pipes-demo.component';
import { CustomRenderDemoComponent }from './demo/custom-render/custom-render-demo.component';
import { ModalEditorDemoComponent }		from './demo/modal-editor/modal-editor-demo.component';
import { SearchingServerSideDemoComponent }	from './demo/searching-server-side/searching-server-side-demo.component';
import { GroupingDemoComponent }	from './demo/grouping/grouping-demo.component';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, ReactiveFormsModule ],
  declarations: [ AppComponent, HomeComponent, BasicDemoComponent, AjaxLoadDemoComponent, LazyLoadDemoComponent, PipesDemoComponent, CustomRenderDemoComponent, ModalEditorDemoComponent, SearchingServerSideDemoComponent, GroupingDemoComponent ],
  providers:    [ JSONP_PROVIDERS ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }