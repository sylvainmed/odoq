import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TemplateComponent} from './template/template.component';
import {SearchComponent} from './search/search.component';
import {TimelineComponent} from './timeline/timeline.component';


const routes: Routes = [{
  path: '', component: TemplateComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'timeline',
    component: TimelineComponent
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
