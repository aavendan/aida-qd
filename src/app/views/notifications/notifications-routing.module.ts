import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* import { AlertsComponent } from './alerts.component'; */
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';

import { BrowserModule } from '@angular/platform-browser'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications'
    },
    children: [
      {
        path: '',
        redirectTo: 'alerts'
      },
     /*  {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts'
        }
      }, */
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
