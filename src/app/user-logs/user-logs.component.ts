import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.css']
})

export class UserLogsComponent implements OnInit{
  userArr: any[];
  public customers : any;
  //newObj = {};


  constructor(private service:UserService) {
    // this.userArr = [
    //   { name: 'User 1', description: 'description 1', status: false, 'salary':850 },
    //   { name: 'User 2', description: 'description 2', status: true, 'salary':550 },
    //   { name: 'User 3', description: 'description 3', status: false, 'salary':300 },
    //   { name: 'User 4', description: 'description 4', status: true, 'salary':250 },
    //   { name: 'User 5', description: 'description 5', status: true, 'salary':150 },
    // ]
  }
  ngOnInit() {
      this.service.getCustomers()
        .subscribe(res => {
          //alert('hello');
          //console.log(res['userData']);
          
          //this.customers = Object.assign([], res['userData']);
          this.customers = res['userData'];
          //console.log(this.customers.cnic);
          //console.log(this.customers[0].name);
        });      
      //this.isLoad = true;
    //console.log(this.logins);
  }

  public getRowsValue(flag) {
    return 0 ;
    // if (flag === null) {
    //   return this.userArr.length;
    // } else {
    //   return this.userArr.filter(i => (i.status == flag)).length;
    // }
  }

}

// export class UserLogsComponent {
//   userArr: any[];

//   constructor() {
//     this.userArr = [
//       { name: 'User 1', description: 'description 1', status: false, 'salary':850 },
//       { name: 'User 2', description: 'description 2', status: true, 'salary':550 },
//       { name: 'User 3', description: 'description 3', status: false, 'salary':300 },
//       { name: 'User 4', description: 'description 4', status: true, 'salary':250 },
//       { name: 'User 5', description: 'description 5', status: true, 'salary':150 },
//     ]
//   }

//   public getRowsValue(flag) {
//     if (flag === null) {
//       return this.userArr.length;
//     } else {
//       return this.userArr.filter(i => (i.status == flag)).length;
//     }
//   }
// }
