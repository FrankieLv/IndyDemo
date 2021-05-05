import { Component, OnInit, ViewChild } from '@angular/core';
import { Config, IonList } from '@ionic/angular';
import { ConferenceData } from '../providers/conference-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage { 
  portfolios = ["Frankie's Portfoli", "Michale's Portfolio"];
  portfoliosdata: any =[];


  constructor(
    public confData: ConferenceData,
  ) { 

  }

  ionViewDidEnter() {
    this.confData.getPortfolioData().subscribe((portfoliosdata: any[]) => {
      this.portfoliosdata = portfoliosdata;
    });
  }
}
