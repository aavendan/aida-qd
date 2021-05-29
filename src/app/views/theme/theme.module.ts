// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
/* import { TypographyComponent } from './typography.component'; */

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    DragDropModule,
    ChartsModule,
    HttpClientModule,
  ],
  declarations: [
    ColorsComponent,
    /* TypographyComponent */
  ]
})
export class ThemeModule { }
