import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { DummyData } from '../providers/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage { 
  portfolios = ["Frankie's Portfoli", "Michale's Portfolio"];
  portfoliosdata: any =[];

  queryText: string;

  constructor(
    public dummyData: DummyData,
    private ngZone: NgZone
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
    this.dummyData.getPortfolioData().subscribe((portfoliosdata: any[]) => {
      this.portfoliosdata = portfoliosdata;
    });
  }
}
