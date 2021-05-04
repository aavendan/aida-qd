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
      data: [60,72, 58, 82, 70],
      label: 'PAT',
      barPercentage: 0.70,
    }
  ];
  public barChart1Labels: Array<any> = ['Anvers', 'Paris','Lille', 'Brugge','Barcelona'];
  public barChart1Options: any = {
    /* tooltips: {
      enabled: false,
      custom: CustomTooltips
    }, */
    /* animation: {
        onComplete: function () {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y + 5);
                });
            });
        }
    }, */
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255, 255, 255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // barChart2
  public barChart2Data: Array<any> = [
    {
      data: [0, 0, 60, 1,0],
      label: 'LS',
      barPercentage: 0.70,
    }
  ];
  public barChart2Labels: Array<any> = ['Anvers','Lille', 'Brugge','Barcelona', 'Paris'];
  public barChart2Options: any = {
    /* tooltips: {
      enabled: false,
      custom: CustomTooltips
    }, */
    /* animation: {
        onComplete: function () {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y + 5);
                });
            });
        }
    }, */
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255, 255, 255,.3)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = false;
  public barChart2Type = 'bar';

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
    /* tooltips: {
      enabled: false,
      custom: CustomTooltips
    }, */
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
      }],
      yAxes: [{
        /* display: true, */
        ticks: {
          stepSize: 1,
          beginAtZero: true,
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
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
