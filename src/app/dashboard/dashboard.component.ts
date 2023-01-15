import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public logins : any;
  actives : any;
  transactions : any;
  revenue : any;
  isLoginLoad = false;
  isActiveLoad = false;
  isTransactionLoad = false;
  isRevenueLoad = false;
  constructor(private service:DashboardService){
    //this.isLoad = false;
  }
  ngOnInit() {
  //this.isLoad = false;
  // this.service.getLogins()
  //   .subscribe(response => {
  //     this.logins = response;
  //   });

    this.service.getLogins()
      .subscribe(res => {this.logins = res; this.isLoginLoad = true;});

    this.service.getActiveUser()
      .subscribe(res => {this.actives = res; this.isActiveLoad = true;});

    this.service.getTransaction()
      .subscribe(res => {this.transactions = res; this.isTransactionLoad = true;});

    this.service.getRevenue()
      .subscribe(res => {this.revenue = res; this.isRevenueLoad = true;});
    //console.log('hello')
    //this.isLoad = true;
  //console.log(this.logins);
  }
}
