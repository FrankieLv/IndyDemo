import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    return this.data;
  }

  getDashboardData() {
    return this.load().pipe(
      map((data: any) => { return data.outstandings })
    );
  }

  getPortfolioData() {
    return this.load().pipe(
      map((data: any) => { return data.portfoliosdata })
    );
  }

}
