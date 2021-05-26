import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsComponent } from './widgets.component';

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
/* [
  {
    path: '',
    component: WidgetsComponent,
    data: {
      title: 'Widgets'
    }
  }
]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {}
