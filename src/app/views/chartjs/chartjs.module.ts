import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';

import { WidgetsComponent } from './../widgets/widgets.component';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
