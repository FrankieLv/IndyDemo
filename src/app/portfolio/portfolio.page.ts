import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyData } from '../providers/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage { 
  portfolios = ["Frankie's Portfoli", "Michale's Portfolio"];
  portfoliosdata: any =[];


  constructor(
    public dummyData: DummyData,
  ) { 

  }

  ionViewDidEnter() {
    this.dummyData.getPortfolioData().subscribe((portfoliosdata: any[]) => {
      this.portfoliosdata = portfoliosdata;
    });
  }
}
