import { Component, OnInit, ViewChild } from '@angular/core';
import { Config, IonList } from '@ionic/angular';
import { DummyData } from '../providers/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  outstandings: any[] = [];

  constructor(
    public dummyData: DummyData,
    public config: Config
  ) { }

  ionViewDidEnter() {
    this.dummyData.getDashboardData().subscribe((outstandings: any[]) => {
      this.outstandings = outstandings;
    });
  }

}
