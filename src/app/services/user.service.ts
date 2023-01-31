import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private customers   =   'http://localhost:31161/api/UserAPI/GetUserData';

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    return this.httpClient.get(this.customers);
  }

}
