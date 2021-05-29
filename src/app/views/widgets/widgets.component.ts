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
  // this
  public barChart1Data: Array<any> = [
    {
      data: [-5],
      backgroundColor: 'rgb(255, 255, 255, 0)',
      stack: 'PAT',
      label: 'PAT'
    },
    {
      data: [-20],
      backgroundColor: 'rgb(255, 0, 0)',
      stack: 'PAT',
      label: 'PAT'
    },
     {
      data: [0,10],
      backgroundColor: 'rgb(255, 193, 7)',
      stack: 'IC',
      label: 'IC'
    },
    /*{
      data: [-10],
      backgroundColor: 'rgb(255, 193, 7)',
      stack: 'CC',
      label: 'CC'
    } */
  ];
  public barChart1Labels: Array<any> = ['PAT', 'IC', 'CC'];
  public barChart1Options: any = {
    /* tooltips: {
      enabled: false,
      custom: CustomTooltips
    }, */
    tooltips: {enabled: false},
    hover: {mode: null},
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
      /* backgroundColor: 'rgb(32, 168, 216)', 
      borderWidth: 1*/
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'horizontalBar';

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
    hover: {mode: null},
    scales: {
      xAxes: [{
        display: true,
        ticks: { 
          min: -20, 
          max: 100, 
          steps: 5,
          stepValue: 5,
        },
        scaleLabel: {
            display: true,
            labelString: 'E[f(x)] = 10'
        } 
      }],
      yAxes: [{
        display: true
      }]
    },
  };
  public barChartPlugins = waterFallPlugin;
  public barChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartData: any[] = [];

  //barSHAP
  getColor(context) {
    var index = context.dataIndex;
    var value = context.dataset.data[index];

    if (index == 0) return '#4DBD74';

    if (index == 2 || index == 4 || index == 5) return '#FFC107';

    if (index == 1 || index == 3) return '#F86C6B';
  }

  public barChartOptionsSHAP: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: false
    },
    hover: { mode: null },
    scales: {
      xAxes: [{
        display: true,
        ticks: { 
          min: -35, 
          max: 100, 
        },
        scaleLabel: {
            display: true,
            labelString: 'E[f(x)] = 10'
        } 
      }],
      yAxes: [{
        display: true,
        /* ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
          padding: -110
        } */
      }]
    },
  };
  public barChartLabelsSHAP: Label[] = [
    'IC (92)',
    'CS (-30)',
    'PAT (10)',
    'HD (-10)',
    'CC (9)',
    'LS (8)'
  ];
  public barChartTypeSHAP: ChartType = 'horizontalBar';
  public barChartLegendSHAP = false;
  public barChartPluginsSHAP = [];

  public barChartDataSHAP: ChartDataSets[] = [
    {
      data: [ -23, -23, 0, 0, 0, 0],
      label: 'Series A',
      stack: 'a',
      backgroundColor: context => this.getColor(context)
    },
    {
      data: [0, 0, 0, 0, 0, 0],
      label: 'Series B',
      stack: 'a',
      backgroundColor: 'black'
    },
    {
      data: [0, 0, 17, 17, 18, 10],
      label: 'Series C',
      stack: 'a',
      backgroundColor: 'transparent'
    },
    {
      data: [69, 17, 10, 10, 9, 8],
      label: 'Series C',
      stack: 'a',
      backgroundColor: context => this.getColor(context)
    }
  ];

  //forceSHAP
  public barChartOptionsForce: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true
    }
  };
  public barcChartColorsForce: Array<any> = []/* [
    { backgroundColor:"#4DBD74", borderWidth: "0.5", borderColor: "#000000" },
    { backgroundColor:"#f72c2c", borderWidth: "0.5", borderColor: "#000000" },
    { backgroundColor:"#a57d03", borderWidth: "0.5", borderColor: "#000000" },
    { backgroundColor:"#F86C6B", borderWidth: "0.5", borderColor: "#000000" },
    { backgroundColor:"#d19d04", borderWidth: "0.5", borderColor: "#000000" },
    { backgroundColor:"#FFC107", borderWidth: "0.5", borderColor: "#000000" }
  ]; */
  public barChartPluginsForce = [{
    afterDraw(chart, easing) {
      
    },
    beforeDraw(chart, easing) {
      const ctx = chart.ctx;
      
      /* const chartArea = chart.chartArea;
      const top = chartArea.top; // Use a value of 0 here to include the legend

      ctx.save();
      ctx.fillStyle = 'red';

      ctx.fillRect(chartArea.left, top, chartArea.right - chartArea.left, chartArea.bottom - top);
      ctx.restore(); */
    }
  }];
  public barChartTypeForce: ChartType = 'horizontalBar';
  public barChartLegendForce = false;

  public barChartDataForce: ChartDataSets[] = [];/*  [
    { data: [92], label: 'IC', stack: 'a' },
    { data: [-30], label: 'CS', stack: 'a' },
    { data: [10], label: 'PAT', stack: 'a' },
    { data: [-10], label: 'HD', stack: 'a' },
    { data: [10], label: 'CS', stack: 'a' },
    { data: [8], label: 'LS', stack: 'a' }
  ]; */
  public barChartLabelsForce: string[] = ['Shap Forces'];

  //Bubble chart
  public featuresNames = [...['Percentage of appearence in texts (PAT)', 
  'Is capitalize (IC)','Count capitals (CC)',
  'Has digits (HD)','Longest substring (LS)','Context similarity (CS)']].reverse();

  public shortfeaturesNames = [...['PAT','IC','CC','HD','LS','CS']].reverse();

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
        { x: 10, y: 5, r: 8 },
        { x: 70, y: 5, r: 8 },
        { x: 45, y: 5, r: 8 },
        { x: 10, y: 5, r: 8 },
        { x: -10, y: 5, r: 8 },
        { x: -32, y: 5, r: 8 },
        { x: -45, y: 5, r: 8 },

        { x: 92, y: 4, r: 8 },
        { x: 75, y: 4, r: 8 },
        { x: 30, y: 4, r: 8 },
        { x: -3, y: 4, r: 8 },
        { x: 10, y: 4, r: 8 },
        { x: -5, y: 4, r: 8 },
        { x: -55, y: 4, r: 8 },

        { x: 9, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 10, y: 3, r: 8 },
        { x: 1, y: 3, r: 8 },
        { x: 1, y: 3, r: 8 },
        { x: -23, y: 3, r: 8 },

        { x: -10, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },
        { x: 1, y: 2, r: 8 },

        { x: 8, y: 1, r: 8 },
        { x: 2, y: 1, r: 8 },
        { x: 10, y: 1, r: 8 },
        { x: 2, y: 1, r: 8 },
        { x: 2, y: 1, r: 8 },
        { x: 2, y: 1, r: 8 },
        { x: 2, y: 1, r: 8 },

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
      let data = [...this.bubbleChartData2[0].data].filter((point, index) => {
        return indexes.includes(index)?point:null;
      })
      
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

      //this.tryForce(indexPoint,indexes, data);
      
      this.showWaterfall();
      this.showForce();

    } 

  }

  getColor2(value) {
    if(value < 0)
      return '#F86C6B';
    if(value >=0 && value < 75)
      return '#FFC107';
    return '#4DBD74';
  }

  showForce() {
    console.log("Force")
    let arrX = [...this.currentDistractorValues].map( (element) => element.x)
    let sortedArr = [...arrX].sort((a,b) => (a > b) ? 1 : a < b ? -1 : -1 ).reverse()
    let fN = [...this.shortfeaturesNames]
    let colors = [...sortedArr].map((element) => this.getColor2(element));

    
    console.clear();
    console.log(sortedArr)
    console.log(colors)

    this.barChartDataForce = [];
    this.barcChartColorsForce = [];

    sortedArr.forEach((element,idxEl) => {

      let idx = arrX.indexOf(element);
      console.log(idx,fN[idx],element,this.getColor2(element))

      this.barChartDataForce.push({ data: [element], label: fN[idx], stack: 'a' })
      this.barcChartColorsForce.push({ backgroundColor:this.getColor2(element), borderWidth: "0.5", borderColor: "#000000" })
    });
  }  

  showWaterfall() {

    this.barChartData = [];
    this.barChartData.push(
    {
      label: 'IC',
      data: [-13],
      backgroundColor: '#4DBD74',
      stack: 'IC',
      display: true
    },
    {
      label: 'IC',
      data: [89],
      backgroundColor: '#4DBD74',
      stack: 'IC',
      display: true
    },
    {
      label: 'CS',
      data: [-13],
      backgroundColor: '#F86C6B',
      stack: 'CS',
      display: true
    },
    {
      label: 'CS',
      data: [17],
      backgroundColor: '#F86C6B',
      stack: 'CS',
      display: true
    },
    {
      data: [17],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'PAT',
      display: false
    },
    {
      label: 'PAT',
      data: [10],
      backgroundColor: '#4DBD74',
      stack: 'PAT',
      display: true
    },
    {
      data: [17],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'HD',
      display: false
    },
    {
      label: 'HD',
      data: [10],
      backgroundColor: '#F86C6B',
      stack: 'HD',
      display: true
    },
    {
      data: [18],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'CC',
      display: false
    },
    {
      label: 'CC',
      data: [9],
      backgroundColor: '#FFC107',
      stack: 'CC',
      display: true
    },
    {
      data: [10],
      waterfall: {
        dummyStack: true,
      },
      backgroundColor: 'transparent',
      stack: 'LS',
      display: false
    },
    {
      label: 'LS',
      data: [8],
      backgroundColor: '#FFC107',
      stack: 'LS',
      display: true
    })
  }

  tryForce(indexPoint,indexes, data) {
    
    let arrX = [...data].map( (element) => element.x)
    let strX = [...data].map( (element) => "Number "+String(element.x) )

    let sortedArr = [...arrX].sort((a,b) => (Math.abs(a) > Math.abs(b)) ? 1 : (Math.abs(a) < Math.abs(b)) ? -1 : -1 )/* .reverse() */

    /* console.log(arrX, indexes, sortedArr ) */

    let fN = [...this.shortfeaturesNames].reverse()

    console.log("Plotting")
    /* 
    console.log(arrX, sortedArr, indexes, fN) */

    let acum = 0;
    let gap = 0;
    
    this.barChartData = [];

    console.clear();
    
    sortedArr.forEach(element => {

      let idx = arrX.indexOf(element);
      let idxValue = indexes[idx]

      
      /* this.barChartData.push({
        data: [base],
        waterfall: {
          dummyStack: true,
        },
        backgroundColor: 'blue',
        stack: fN[idx],
        display: false
      }) */
      
      
      
      
      this.barChartData.push( {
        label: fN[idx],
        data: [element],
        backgroundColor: element < 0 ? '#F86C6B' : element < 75 ? '#FFC107' : '#4DBD74',
        stack: fN[idx],
        display: true
      })

      console.log("value: ", element, "acum at: ", acum, " on ", fN[idx])
      

      acum += element;
      console.log("after ", acum)
      

     /*  base += element;
      console.log(base) */
      
     /*  this.barChartData.push({
        data: [base],
        waterfall: {
          dummyStack: true,
        },
        backgroundColor: 'transparent',
        stack: fN[idx],
        display: false
      }) */

    });

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
