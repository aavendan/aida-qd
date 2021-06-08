import { Component } from '@angular/core';

import { pluginService, ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css']
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
            max: 10, 
          },
          scaleLabel: {
              display: true,
              labelString: 'Importance'
          }
        }
      ]
    }
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;

  getColor = (context) => {
    let index = context.dataIndex;
    let value = context.dataset.data[index];
    return value <= 2.5 ? '#F86C6B' : value < 7.5 ? '#FFC107' : '#4DBD74';
  }

  public barChartData: ChartDataSets[] = [
    { 
      data: [9.5, 7.5, 6, 5, 4, 2.5], 
      label: 'Importance', 
      stack: 'a', 
      borderWidth: 0.1, 
      barThickness: 3,
      borderColor: context => this.getColor(context),
      backgroundColor: context => this.getColor(context),
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
