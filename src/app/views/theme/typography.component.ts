import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [60, 58, 70,72, 82],
      label: 'PAT',
      barPercentage: 0.70,
    }
  ];
  public barChart1Labels: Array<any> = ['Anvers','Lille','Barcelona', 'Paris', 'Brugge'];
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

  // barChar2
  public barChart2Data: Array<any> = [
    {
      data: [65, 60, 62, 60,72, 68],
      label: 'LS',
      barPercentage: 0.70,
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
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = true;
  public barChart2Type = 'line';

}
