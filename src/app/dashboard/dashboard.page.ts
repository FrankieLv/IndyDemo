import { Component, OnInit, ViewChild } from '@angular/core';
import { Config, IonList } from '@ionic/angular';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  speakers: any[] = [];

  constructor(
    public confData: ConferenceData,
    public user: UserData,
    public config: Config
  ) { }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

}
