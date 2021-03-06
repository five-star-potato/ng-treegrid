import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     			from './demo/home/home.component';
import { BasicDemoComponent }   		from './demo/basic/basic-demo.component';
import { AjaxLoadDemoComponent }   		from './demo/ajax-load/ajax-load-demo.component';
import { LazyLoadDemoComponent }   		from './demo/lazy-load/lazy-load-demo.component';
import { PipesDemoComponent }   		from './demo/pipes/pipes-demo.component';
import { CustomRenderDemoComponent }	from './demo/custom-render/custom-render-demo.component';
import { ModalEditorDemoComponent }		from './demo/modal-editor/modal-editor-demo.component';
import { SearchingServerSideDemoComponent }	from './demo/searching-server-side/searching-server-side-demo.component';
import { GroupingDemoComponent }	from './demo/grouping/grouping-demo.component';

const APP_ROUTES: Routes = [
  { path: '',  pathMatch:'full', redirectTo: 'home' },
  { path: 'home',  component: HomeComponent },
  { path: 'demo1', component: BasicDemoComponent },
  { path: 'demo2', component: AjaxLoadDemoComponent },
  { path: 'demo3', component: LazyLoadDemoComponent },
  { path: 'demo4', component: PipesDemoComponent },
  { path: 'demo5', component: CustomRenderDemoComponent },  
  { path: 'demo6', component: ModalEditorDemoComponent },
  { path: 'demo7', component: SearchingServerSideDemoComponent },
  { path: 'demo8', component: GroupingDemoComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);