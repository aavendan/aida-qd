/* import { Component } from '@angular/core'; */

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

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
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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

  // scatter
 
  public scatterChartOptions: ChartOptions = {
    legend: {
      display: false,
    },
    title: {
      text: 'Earned points per Percentage of appearence in texts (PAT)',
      display: true
    },
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
          },
          scaleLabel: {
            display: true,
            labelString: 'Points'
          }  
       }
      ],
    },
    
  };
  public scatterChartLabels: Label[] = ['Brugge', 'Paris', 'Barcelona', 'Lille', 'Amsterdam', 'NYC', 'London'];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 80, y: 82 },
        { x: 60, y: 65 },
        { x: 75, y: 77 },
        { x: 73, y: 72 },
        { x: 50, y: -30 },
        { x: 45, y: -30 },
        { x: 43, y: -28 },
      ],
      pointHoverBackgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' :  '#4DBD74';
      },
      pointHoverBorderColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' :  '#4DBD74';
      },
      pointBackgroundColor: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index]['y'];
        
        return value < 0 ? '#F86C6B' :  '#4DBD74';
      },
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  /* // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  } */

}
