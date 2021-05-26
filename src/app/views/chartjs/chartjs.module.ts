import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';

import { WidgetsComponent } from './../widgets/widgets.component';

import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ChartJSRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartJSComponent, WidgetsComponent ]
})
export class ChartJSModule { }
