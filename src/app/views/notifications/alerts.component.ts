import { Component, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';


// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'alerts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['alerts.component.css'],
 /*  styles: [
    `
  .alert-md-local {
    background-color: #009688;
    border-color: #00695C;
    color: #fff;
  }
  `
  ], */
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AlertsComponent {

  examples: any[] = [
    {
      opacity: `opacity-4`,
      icon: `icon-clock`,
      type: `History`,
      text: `
      <p class="mb-0 bg-light p-3">
        The Roman Catholic Diocese of Bruges, 
        (Bisdom <strong>Brugge</strong> 
        
        <i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="9 times in text"></i>
        
        in native Dutch) is 
        a suffragan diocese in ecclesiastical province of the primatial 
        Metropolitan archdiocese of Mechelen-<strong>Brussels</strong> 
        <i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="6 times in text"></i>
        (which covers all 
        the Roman Catholic church in Belgium).
      </p>`,
      href: `https://en.wikipedia.org/wiki/Roman_Catholic_Diocese_of_Bruges`,
      title: `Roman Catholic Diocese of Bruges`
    },
    {
      opacity: `opacity-1`,
      icon:`icon-social-dribbble`,
      type: `Sports`,
      text: `
      <p class="mb-0 bg-light p-3">
        At that time, the <strong>Brussels</strong><i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="1 time in text"></i>-based 
        club and Club <strong>Brugge</strong><i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="70 times in text"></i> 
        won most trophies between them, 
        leaving little room for other Belgian teams. Matches between these two teams were often 
        contested for the title of champion of Belgium. 
      </p>
      `,
      href:`https://en.wikipedia.org/wiki/Club_Brugge_KV`,
      title:`Club Brugge KV`
    },
    {
      opacity: `opacity-1`,
      icon: `icon-social-dribbble`,
      type: `Sports`,
      text: ` 
      <p class="mb-2 bg-light p-3">
        Traditionally, the clubs Anderlecht, Club <strong>Brugge</strong>
        <i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="9 times in text"></i> and...
      </p>
      <p class="mb-2 bg-light p-3">
        ... Walloon Brabant and the <strong>Brussels</strong> 
        <i class="fa fa-info-circle fa-xs text-primary" 
        data-toggle="tooltip" data-placement="left" 
        title="26 times in text"></i>
        Capital Region – whose clubs are split... 
      </p>`,
      href:`https://en.wikipedia.org/wiki/Football_in_Belgium`,
      title:`Football in Belgium`
    }
  ]

  constructor(sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
  }
  dismissible = true;
  alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];

  alertsHtml: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }
  ];

  index = 0;
  messages = [
    'You successfully read this important alert message.',
    'Now this text is different from what it was before. Go ahead and click the button one more time',
    'Well done! Click reset button and you\'ll see the first message'
  ];

  alertsDismiss: any = [];

  reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }

  changeText() {
    if (this.messages.length - 1 !== this.index) {
      this.index++;
    }
  }

  add(): void {
    this.alertsDismiss.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }
}
