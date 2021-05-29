import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Distractor'
    },
    children: [
      {
        path: '',
        redirectTo: 'generator'
      },
      {
        path: 'generator',
        component: ColorsComponent,
        data: {
          title: 'Generator'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
