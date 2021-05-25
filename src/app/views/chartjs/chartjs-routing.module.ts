import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { WidgetsComponent } from './../widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Question'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Explanations'
        },
        children: [
          {
            path: '',
            redirectTo: 'list'
          },
          {
            path: 'shap',
            component: WidgetsComponent,
            data: {
              title: 'Shap'
            }
          },
          {
            path: 'list',
            component: ChartJSComponent,
            data: {
              title: 'Points'
            }
          }
        ]
      }
     
    ]
  }
];

/* const routes: Routes = [
  {
    path: '',
    component: ChartJSComponent,
    data: {
      title: 'Question'
    }
  }
]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
