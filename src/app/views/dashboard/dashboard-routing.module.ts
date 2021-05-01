import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

/* const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Question'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: DashboardComponent,
        data: {
          title: 'Distractor'
        }
      }
    ]
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
            path: 'list',
            component: DashboardComponent,
            data: {
              title: 'Features'
            }
          },
          {
            path: '',
            redirectTo: 'list'
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
export class DashboardRoutingModule {}
