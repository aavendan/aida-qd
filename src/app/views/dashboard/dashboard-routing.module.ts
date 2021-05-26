import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TypographyComponent } from './../theme/typography.component';

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
        path:'',
        data: {
          title: 'Distractor'
        },
        children: [
          {
            path: '',
            data: {
              title: 'Features'
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
                  title: 'List'
                }
              },
              {
                path: 'comparison',
                component: TypographyComponent,
                data: {
                  title: 'Comparison'
                }
              },
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
export class DashboardRoutingModule {}
