import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { WidgetsComponent } from './../widgets/widgets.component';

/* const routes: Routes = [
  {
    path: '',
    component: ChartJSComponent,
    data: {
      title: 'Question'
    }
  }
]; */

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
          title: 'Distractor'
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
                redirectTo: 'aida'
              },
              {
                path: 'aida',
                component: ChartJSComponent,
                data: {
                  title: 'AIDA'
                }
              },
              {
                path: 'shap',
                component: WidgetsComponent,
                data: {
                  title: 'SHAP'
                }
              }
            ]
          }
        ]
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
