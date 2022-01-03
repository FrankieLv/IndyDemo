import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DummyData } from '../providers/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage { 
  portfolios = [];
  portfoliosdata: any =[];

  queryText: string;

  constructor(
    public dummyData: DummyData,
    private ngZone: NgZone,
    public loadingCtrl: LoadingController
  ) { 

  }

  updatePortfolioData(){
    this.dummyData.getPortfolioData()
    .pipe(
      map(
          (portfolioData: any[]) => {
              for(let data of portfolioData){
                data.hide= false;
                if(!data.name.toLowerCase().includes(this.queryText.toLowerCase())){
                    data.hide= true;
                }
              }
              return portfolioData;
          }
      )
    ).subscribe((portfoliosdata: any[]) => {
      this.portfoliosdata = portfoliosdata;
    });
  }


  ionViewDidEnter() {
    this.showLoadingOverlay();
  }
  
  ionViewDidLeave(){
    this.queryText = "";
    this.portfolios = [];
    this.portfoliosdata = [];
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
      this.dummyData.getPortfolioData().subscribe((portfoliosdata: any[]) => {
        this.portfolios = ["Frankie's Portfolio", "Michale's Portfolio"];
        this.portfoliosdata = portfoliosdata;
        console.log("frankie testing log");
      });
    });
  }
}
