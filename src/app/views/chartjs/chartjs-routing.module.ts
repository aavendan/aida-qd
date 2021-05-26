import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';

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
              title: 'Points'
            },
            children: [
              {
                path: '',
                redirectTo: 'list'
              },
              {
                path: 'list',
                component: ChartJSComponent,
                data: {
                  title: 'AIDA'
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
