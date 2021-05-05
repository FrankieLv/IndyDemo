import { Component, OnInit, ViewChild } from '@angular/core';
import { Config, IonList } from '@ionic/angular';
import { ConferenceData } from '../providers/conference-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  outstandings: any[] = [];

  constructor(
    public confData: ConferenceData,
    public config: Config
  ) { }

  ionViewDidEnter() {
    this.confData.getDashboardData().subscribe((outstandings: any[]) => {
      this.outstandings = outstandings;
    });
  }

}
