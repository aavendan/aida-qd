import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { WidgetsComponent } from './../widgets/widgets.component';
import { FormsComponent } from './../base/forms.component';

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
            redirectTo: 'lime'
          },
          {
            path: 'featureimportance',
            component: FormsComponent,
            data: {
              title: 'Feature importance'
            }
          },
          {
            path: 'lime',
            component: ChartJSComponent,
            data: {
              title: 'LIME'
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
