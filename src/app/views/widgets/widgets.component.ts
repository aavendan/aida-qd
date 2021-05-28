import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { pluginService, ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

import {waterFallPlugin} from 'chartjs-plugin-waterfall';

//https://stackblitz.com/edit/scattered-chart?file=src%2Fapp%2Fapp.component.ts
function setupPlugin() {
  console.log(pluginService)
  pluginService.register({
      id: 'ScatterGraphYaxis',
      afterDatasetDraw: (chart, args, options) => {

        
        let ctx = chart.ctx;
        ctx.beginPath();       // Start a new path
        ctx.moveTo(30, 50);    // Move the pen to (30, 50)
        ctx.lineTo(150, 100);  // Draw a line to (150, 100)
        ctx.stroke();   

      }
    });
}

@Component({
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.css']
})
export class WidgetsComponent {

  @ViewChildren( BaseChartDirective ) charts: QueryList<BaseChartDirective>

  public currentDistractor: any = 'Distractor';
  public currentDistractorValues: Array<any> = [];

  /* constructor() {
    setupPlugin()
   } */

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
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

  // lineChart4
  public lineChart4Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChart4Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart4Colours: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 2
    }
  ];
  public lineChart4Legend = false;
  public lineChart4Type = 'line';


  // barChart2
  public barChart2Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A',
      barPercentage: 0.6
    }
  ];
  public barChart2Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,.2)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = false;
  public barChart2Type = 'bar';


  // barChart3
  public barChart3Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart3Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart3Primary: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Danger: Array<any> = [
    {
      backgroundColor: getStyle('--danger'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Success: Array<any> = [
    {
      backgroundColor: getStyle('--success'),
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Legend = false;
  public barChart3Type = 'bar';


  // lineChart5
  public lineChart5Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart5Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart5Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart5Info: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--info'),
      borderWidth: 2
    }
  ];
  public lineChart5Success: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--info'),
      borderWidth: 2
    }
  ];
  public lineChart5Warning: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: getStyle('--warning'),
      borderWidth: 2
    }
  ];
  public lineChart5Legend = false;
  public lineChart5Type = 'line';

  //mybarchar
  //https://gist.github.com/EdwinChua/0a5d66dc561fe7d3866021b18a320585
  //https://github.com/everestate/chartjs-plugin-waterfall
  public barChartOptions: any = {
    tooltips: {enabled: false},
    hover: {mode: null}
  };
  public barChartPlugins = [waterFallPlugin]
  public barChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartData: any[] = [
    {
      data: [-10],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'stack 1',
      display: false
    },
    {
      label: 'PAT',
      data: [-30],
      backgroundColor: '#4DBD74',
      stack: 'stack 1',
      display: true
    },
    {
      label: 'IC',
      data: [-40],
      backgroundColor: '#FFC107',
      stack: 'stack 2',
      display: true
    },
    {
      label: 'CC',
      data: [18],
      backgroundColor: '#FFC107',
      stack: 'stack 3',
      display: true
    },
    {
      label: 'HD',
      data: [-14],
      backgroundColor: '#4DBD74',
      stack: 'stack 4',
      display: false
    },
    {
      label: 'HD',
      data: [18],
      backgroundColor: '#4DBD74',
      stack: 'stack 4',
      display: true
    },
    {
      data: [-14],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'stack 5',
      display: false
    },
    {
      label: 'LS',
      data: [-6],
      backgroundColor: '#FFC107',
      stack: 'stack 5',
      display: true
    },
  ];

  //Bubble chart
  public featuresNames = ['Percentage of appearence in texts (PAT)', 
  'Is capitalize (IC)','Count capitals (CC)',
  'Has digits (HD)','Longest substring (LS)','Context similarity (CS)'].reverse();

  public shortfeaturesNames = ['PAT','IC','CC','HD','LS','CS'].reverse();

  public bubbleChartOptions2: ChartOptions = {
    legend: {
      display: false,
    },
    title: {
      text: '',
      display: true
    },
    responsive: true,
    plugins: {
      ScatterGraphYaxis: {
      }
    },
    tooltips: {
      enabled: true,
      /* intersect: false, */
      callbacks: {
       label: function (tooltipItem, data) {

        let label = data.labels[tooltipItem.index];
        /* let value = data.datasets[0].data[tooltipItem.index]['x'] 
        let points = data.datasets[0].data[tooltipItem.index]['y'] */
        return " "+label;
       },
       footer: (tooltipItems, data) => {
         let points = tooltipItems[0].xLabel
         let idxFeature = tooltipItems[0].yLabel
         let featureShortName = this.shortfeaturesNames[idxFeature]
         return [featureShortName+':  '+points+' points'];
        }
      },
    },
    scales: {
      xAxes: [
        { 
          ticks: { 
            min: -100, 
            max: 100, 
          },
          scaleLabel: {
              display: true,
              labelString: 'SHAP value (impact on model output)'
          }
        }
      ],
      yAxes: [
        { 
          ticks: { 
            min: 0, max: 5,
            callback: value => this.featuresNames[value]
          },
       }
      ],
    },
    
  };

  public distractors =  [
    'Brugge', 'Paris', 'Barcelona', 
    'Lille' , 'Anvers', 'NYC', 'London'];

  public bubbleChartLabels2: Label[] = this.distractors.concat(this.distractors,
    this.distractors,
    this.distractors,
    this.distractors,
    this.distractors);

  public bubbleChartData2: ChartDataSets[] = [
    {
      data:[
        { x: 92, y: 5, r: 8 },
        { x: 70, y: 5, r: 8 },
        { x: 45, y: 5, r: 8 },
        { x: 10, y: 5, r: 8 },
        { x: -10, y: 5, r: 8 },
        { x: -32, y: 5, r: 8 },
        { x: -45, y: 5, r: 8 },

        { x: 55, y: 4, r: 8 },
        { x: 75, y: 4, r: 8 },
        { x: 30, y: 4, r: 8 },
        { x: -3, y: 4, r: 8 },
        { x: 10, y: 4, r: 8 },
        { x: -5, y: 4, r: 8 },
        { x: -55, y: 4, r: 8 },

        { x: 60, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 0, y: 3, r: 8 },
        { x: 0, y: 3, r: 8 },
        { x: -23, y: 3, r: 8 },

        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },
        { x: 0, y: 2, r: 8 },

        { x: 60, y: 1, r: 8 },
        { x: 0, y: 1, r: 8 },
        { x: 10, y: 1, r: 8 },
        { x: 0, y: 1, r: 8 },
        { x: 0, y: 1, r: 8 },
        { x: 0, y: 1, r: 8 },
        { x: 0, y: 1, r: 8 },

        { x: -30, y: 0, r: 8 },
        { x: 40, y: 0, r: 8 },
        { x: -10, y: 0, r: 8 },
        { x: 60, y: 0, r: 8 },
        { x: 75, y: 0, r: 8 },
        { x: 88, y: 0, r: 8 },
        { x: 92, y: 0, r: 8 },
      ],
       backgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['x'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      },
      /*pointHoverBackgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      },
      pointHoverBorderColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      },
      pointBackgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      }, */
      label: 'Series A',
      pointRadius: 5,
    },
  ];
  public bubbleChartType2: ChartType = 'bubble';

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    if(active.length > 0) {
      let indexPoint = active[0]['_index']

      let selectedDistractor = this.bubbleChartLabels2[indexPoint]
      

      let getAllIndexes = (arr, val) => {
          var indexes = [], i = -1;
          while ((i = arr.indexOf(val, i+1)) != -1){
              indexes.push(i);
          }
          return indexes;
      }
      let indexes = getAllIndexes(this.bubbleChartLabels2, selectedDistractor);
      
      let minRadio = 5;
      let maxRadio = 10;

      this.bubbleChartData2[0].data = [...this.bubbleChartData2[0].data].map( (point, index) => {
        return {'x':point['x'], 'y':point['y'], 'r':indexes.includes(index)?maxRadio:minRadio}
      })

      this.bubbleChartData2[0].backgroundColor = [...this.bubbleChartData2[0].data].map( (point, index) => {
        let value = this.bubbleChartData2[0].data[index]['x'];
        let color = value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74'
        return indexes.includes(index)?color:'#E4E5E6';
      })

      //Distractor name
      this.currentDistractor = this.bubbleChartLabels2[indexPoint];

      //Features' distractor values
      this.currentDistractorValues = this.bubbleChartData2[0].data.filter( 
        (currentValue, index) => indexes.includes(index)).reverse();
      
      /* console.log(this.charts.get(0).chart.ctx)
      this.charts.get(0).chart.ctx.beginPath();
      this.charts.get(0).chart.ctx.moveTo(0, 0);
      this.charts.get(0).chart.ctx.lineTo(300, 150);
      this.charts.get(0).chart.ctx.stroke();
      this.charts.get(0).chart.update(); */

    } 

  }

  getClass(value) {

    if(!value)
    return '';

    let classTd = 'mid-value';
    if(value.x >= 75) {
      classTd = 'up-value'
    } else if (value.x < 0) {
      classTd = 'down-value'
    }
    return  classTd;
  }

  

}
