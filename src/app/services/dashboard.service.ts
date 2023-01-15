import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private loginUsersUrl   =   'http://localhost/dashboard-api.php?login_users';
  private activeUserUrl   =   'http://localhost/dashboard-api.php?active_users';
  private transactionUrl  =   'http://localhost/dashboard-api.php?transactions';
  private revenueUrl      =   'http://localhost/dashboard-api.php?revenue';

  constructor(private httpClient: HttpClient) { }

  getLogins(){
    return this.httpClient.get(this.loginUsersUrl);
  }

  getActiveUser(){
    return this.httpClient.get(this.activeUserUrl);
  }

  getTransaction(){
    return this.httpClient.get(this.transactionUrl);
  }

  getRevenue(){
    return this.httpClient.get(this.revenueUrl);
  }
}
