import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
    public loadingCtrl: LoadingController
  ) { }


  ionViewDidEnter() {
    this.showLoadingOverlay();
  }

  ionViewDidLeave(){
    this.outstandings = [];
  }

  async showLoadingOverlay() {
    const loading = await this.loadingCtrl.create({
      spinner: "circular",
      duration: 500,
      message: 'Loading',
      translucent: true
    });
    await loading.present();
    await loading.onDidDismiss().then((overlayDetail) => {
      this.dummyData.getDashboardData().subscribe((outstandings: any[]) => {
        this.outstandings = outstandings;
      });
    });
  }

}
