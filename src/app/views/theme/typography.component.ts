import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label  } from 'ng2-charts';

@Component({
  templateUrl: 'typography.component.html',
  styleUrls: ['typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [60, 58, 82, 70,72],
      label: 'PAT',
      barPercentage: 0.70,
    }
  ];
  public barChart1Labels: Array<any> = ['Anvers','Lille', 'Brugge','Barcelona', 'Paris'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
      }],
      yAxes: [{
        display: true
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // barChar2
  public barChart2Data: Array<any> = [
    {
      data: [0, 60, 0, 0, 0],
      label: 'LS',
      barPercentage: 0.60,
    }
  ];
  public barChart2Labels: Array<any> = ['Anvers','Brugge', 'Lille','Barcelona', 'Paris'];
  public barChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
      }],
      yAxes: [{
        display: true
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,0,0,.3)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = true;
  public barChart2Type = 'line';

  // scatter
  /* public scatterChartOptions: ChartOptions = {
    responsive: true,
  };
  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter'; */

  // barChart3
  public barChart3Data: Array<any> = [
    {
      data: [0, 0, 1, 0, 0],
      label: 'HD',
      barPercentage: 0.70,
    }
  ];
  public barChart3Labels: Array<any> = ['Anvers','Lille', 'Vienna 1','Barcelona', 'Brugge'];
  public barChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
      }],
      yAxes: [{
        /* display: true, */
        ticks: {
          stepSize: 1,
          beginAtZero: true,
          callback: function (value) {
            return value?'True':'False';
          }
       }
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart3Legend = false;
  public barChart3Type = 'bar';


}
