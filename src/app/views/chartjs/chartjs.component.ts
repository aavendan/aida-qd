/* import { Component } from '@angular/core'; */

import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';

@Component({
  templateUrl: 'chartjs.component.html',
  styleUrls: ['chartjs.component.css']
})
export class ChartJSComponent {

  /* @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective; */
  @ViewChildren( BaseChartDirective ) charts: QueryList<BaseChartDirective>

  valueLS:number = 0;
  valuePAT:number = 0;
  valueLSRounded:number = 0;

  pointsLS: number = 0;
  pointsPAT: number = 0; 
  pointsLSClass: string = '';
  pointsPATClass: string = '';
  pointLSsign: string = '';
  pointPATsign: string = '';

  distractor: string = 'Distractor';
  points: number = 0;
  
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Brugge', 'Paris', 'Barcelona', 'Lille', 'Amsterdam', 'NYC', 'London'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {data: [89, 80, 80, 74, -30, 45, 32], label: 'Points'}
    /* {data: [82, 65, 77, 72, -30, -30, -28], label: 'Percentage of appearence in texts (PAT)'},
    {data:  [60, 0, 10, 0, 0, 0, 0], label: 'Longest substring (LS)'}, */
    /* tooltips: {
      enabled: true,
      callbacks: {
       label: function (tooltipItem, data) {
        let label = data.labels[tooltipItem.index];
        let value = data.datasets[0].data[tooltipItem.index]['x'] 
        let points = data.datasets[0].data[tooltipItem.index]['y']
        return label +" " ;
       },
      }
    } */
  ];

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

  // scatter 1
 
  public bubbleChartOptions1: ChartOptions = {
    legend: {
      display: false,
    },
    /* title: {
      text: 'Earned points per Percentage of appearence in texts (PAT)',
      display: true
    }, */
    responsive: true,
    tooltips: {
      enabled: true,
      callbacks: {
        /* label: function (tooltipItem, data) {
          return ['first thing', 'another thing', 'and another one'];
        } */
       label: function (tooltipItem, data) {
        let label = data.labels[tooltipItem.index];
        let value = data.datasets[0].data[tooltipItem.index]['x'] 
        let points = data.datasets[0].data[tooltipItem.index]['y']
        return label +" " /* + " PAT: "+value+"%  ("+points+" points)" */;
       },
       /* afterLabel: function(tooltipItem, data) {
        var someValue2 = "Mindfuc";
        return someValue2;
       }, */
       footer: function(tooltipItems, data) {
         let label = tooltipItems[0].xLabel
         let value = tooltipItems[0].yLabel
         /*  let label = data.labels[tooltipItems.index];
          let value = data.datasets[0].data[tooltipItems.index]['x'] 
          let points = data.datasets[0].data[tooltipItems.index]['y'] */
          /* return label + " PAT: "+value+"%  ("+points+" points)"; */
          return ['PAT:  '+label+'%', value+' points '];
        }
      },
    },
    scales: {
      xAxes: [
        { 
          ticks: { 
            min: 0, 
            max: 100, 
          },
          scaleLabel: {
              display: true,
              labelString: 'Percentage of appearence in texts (PAT)'
          } 
        }
      ],
      yAxes: [
        { 
          ticks: { 
            min: -100, 
            max: 100,
            /* steps : 10,
            stepValue : 10, */
          },
          scaleLabel: {
            display: true,
            labelString: 'Points'
          }  
       }
      ],
    },
    
  };
  public bubbleChartLabels1: Label[] = ['Brugge', 'Paris', 'Barcelona', 'Lille', 'Amsterdam', 'NYC', 'London'];

  public bubbleChartData1: ChartDataSets[] = [
    {
      data: [
        { x: 80, y: 82  , r: 5},
        { x: 60, y: 65  , r: 5},
        { x: 75, y: 77  , r: 5},
        { x: 73, y: 72  , r: 5},
        { x: 50, y: -30 , r: 5},
        { x: 45, y: -30 , r: 5},
        { x: 43, y: -28 , r: 5},
      ],
      backgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      },
      pointHoverBackgroundColor: function(context) {
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
      },
      label: 'Series A',
      pointRadius: 5,
    },
  ];
  public bubbleChartType1: ChartType = 'bubble';

  // scatter 2
  public bubbleChartOptions2: ChartOptions = {
    legend: {
      display: false,
    },
    /* title: {
      text: 'Earned points per Percentage of appearence in texts (PAT)',
      display: true
    }, */
    responsive: true,
    tooltips: {
      enabled: true,
      callbacks: {
        /* label: function (tooltipItem, data) {
          return ['first thing', 'another thing', 'and another one'];
        } */
       label: function (tooltipItem, data) {
        let label = data.labels[tooltipItem.index];
        let value = data.datasets[0].data[tooltipItem.index]['x'] 
        let points = data.datasets[0].data[tooltipItem.index]['y']
        return label +" " /* + " PAT: "+value+"%  ("+points+" points)" */;
       },
       /* afterLabel: function(tooltipItem, data) {
        var someValue2 = "Mindfuc";
        return someValue2;
       }, */
       footer: function(tooltipItems, data) {
         let label = tooltipItems[0].xLabel
         let value = tooltipItems[0].yLabel
         /*  let label = data.labels[tooltipItems.index];
          let value = data.datasets[0].data[tooltipItems.index]['x'] 
          let points = data.datasets[0].data[tooltipItems.index]['y'] */
          /* return label + " PAT: "+value+"%  ("+points+" points)"; */
          return ['LS:  '+label+'%', value+' points '];
        }
      },
    },
    scales: {
      xAxes: [
        { 
          ticks: { 
            min: 0, 
            max: 100, 
          },
          scaleLabel: {
              display: true,
              labelString: 'Longest substring (LS)'
          } 
        }
      ],
      yAxes: [
        { 
          ticks: { 
            min: -100, 
            max: 100,
            /* steps : 10,
            stepValue : 10, */
          },
          scaleLabel: {
            display: true,
            labelString: 'Points'
          }  
       }
      ],
    },
    
  };
  public bubbleChartLabels2: Label[] = ['Brugge', 'Paris', 'Barcelona', 'Lille', 'Amsterdam', 'NYC', 'London'];

  public bubbleChartData2: ChartDataSets[] = [
    {
      data:[
        { x: 60, y: 60, r: 5 },
        { x: 0, y: 0, r: 5 },
        { x: 10, y: 10, r: 5 },
        { x: 0, y: 0, r: 5 },
        { x: 0, y: 0, r: 5 },
        { x: 0, y: 0, r: 5 },
        { x: 0, y: 0, r: 5 },
      ],
      backgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      },
      pointHoverBackgroundColor: function(context) {
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
      },
      label: 'Series A',
      pointRadius: 5,
    },
  ];
  public bubbleChartType2: ChartType = 'bubble';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    if(active.length > 0) {
      /* var indexPoint = active[0]['_index'];
      
      let minRadio = 5;
      let maxRadio = 15;

      this.bubbleChartData1[0].data = [...this.bubbleChartData1[0].data].map( (point, index) => {
        return {'x':point['x'], 'y':point['y'], 'r':index == indexPoint?maxRadio:minRadio}
      })

      this.bubbleChartData1[0].borderColor = [...this.bubbleChartData1[0].data].map( (point, index) => {
        return index==indexPoint?'black':'';
      })

      this.bubbleChartData2[0].data = [...this.bubbleChartData2[0].data].map( (point, index) => {
        return {'x':point['x'], 'y':point['y'], 'r':index == indexPoint?maxRadio:minRadio}
      })

      this.bubbleChartData2[0].borderColor = [...this.bubbleChartData2[0].data].map( (point, index) => {
        return index==indexPoint?'black':'';
      })

      var referencePoint = this.bubbleChartData1[0].data[indexPoint];
      console.log(referencePoint) */
      /*  */

     /*  console.log(this.bubbleChartOptions2.tooltips.callbacks) */

      /* this.charts.get(1).chart.config.options.tooltips.enabled = true; */

      /* this.bubbleChartData2[0].borderColor = (context) => {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return index==indexPoint?'black':value < 0 ? '#F86C6B' : value < 75 ? '#FFC107' : '#4DBD74';
      }, */

      
      /* this.charts.get(1).ngOnChanges({}); */

      
    }
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    /* console.log(event, active); */

    if(active.length > 0) {

      var indexPoint = active[0]['_index'];

      let minRadio = 5;
      let maxRadio = 15;

      this.bubbleChartData1[0].data = [...this.bubbleChartData1[0].data].map( (point, index) => {
        return {'x':point['x'], 'y':point['y'], 'r':index == indexPoint?maxRadio:minRadio}
      })

      this.bubbleChartData1[0].borderColor = [...this.bubbleChartData1[0].data].map( (point, index) => {
        return index==indexPoint?'black':'';
      })

      this.bubbleChartData2[0].data = [...this.bubbleChartData2[0].data].map( (point, index) => {
        return {'x':point['x'], 'y':point['y'], 'r':index == indexPoint?maxRadio:minRadio}
      })

      this.bubbleChartData2[0].borderColor = [...this.bubbleChartData2[0].data].map( (point, index) => {
        return index==indexPoint?'black':'';
      })

      this.distractor = this.barChartLabels[indexPoint];
      this.points = Number(this.barChartData[0].data[indexPoint]);

      this.pointsPAT = Number(this.bubbleChartData1[0].data[indexPoint].y);
      this.pointsLS = Number(this.bubbleChartData2[0].data[indexPoint].y);
      
      this.pointsLSClass = this.pointsLS < 0 ? 'down-value': this.pointsLS < 75 ? 'mid-value':'up-value';
      this.pointsPATClass = this.pointsPAT < 0 ? 'down-value': this.pointsPAT < 75 ? 'mid-value':'up-value';

      this.pointLSsign = this.pointsLS < 0 ? 'fa-arrow-down': this.pointsLS < 75 ? 'fa-arrows-h':'fa-arrow-up';
      this.pointPATsign = this.pointsPAT < 0 ? 'fa-arrow-down': this.pointsPAT < 75 ? 'fa-arrows-h':'fa-arrow-up';


      this.valuePAT = Number(this.bubbleChartData1[0].data[indexPoint].x);
      this.valueLS = Number(this.bubbleChartData2[0].data[indexPoint].x);
      
      this.valueLSRounded = Math.floor(this.valueLS * this.distractor.length / 100 )

    }
  }

}
