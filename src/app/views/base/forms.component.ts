import { Component } from '@angular/core';

import { pluginService, ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  public featureNames = ['Percentage of appearence in texts', 
  'Is capitalize','Count capitals',
  'Has digits','Longest substring','Context similarity'];

  public featureValuesImportant = [
    { 'name': 'Percentage of appearence in texts', 'importance': 0.2, 'value': '> 60%', 'ocurrences': 32},
    { 'name': 'Percentage of appearence in texts', 'importance': 0.15, 'value': '> 30% && <= 60%', 'ocurrences': 28},
    { 'name': 'Is capitalize', 'importance': 0.3, 'value': 'True', 'ocurrences': 45},
  ]

  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true
    },
    scales: {
      xAxes: [
        { 
          ticks: { 
            min: 0, 
            max: 1.2, 
          },
        }
      ]
    }
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { 
      data: [0.95, 0.75, 0.6, 0.5, 0.4, 0.25], 
      label: 'Importance', 
      stack: 'a', 
      borderWidth: 0.1, 
      barThickness: 3,
      backgroundColor: 'black', 
      borderColor: 'black' 
    },
   
  ];
  public barChartLabels: string[] = this.featureNames;

  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
