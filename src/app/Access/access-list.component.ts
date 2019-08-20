import { Component, OnInit } from '@angular/core';
import { AccessDetailsService } from './Service/accessDetailsService.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.css']
})
export class AccessListComponent implements OnInit {

    ngOnInit()
    {

    }
  userData: any;//[] = [];
  userList1: any[] = [];
  lastkeydown1: number = 0;
  subscription: any;
  listData=[];
  that: any = this;

  constructor(private userService: AccessDetailsService) {
    //Get the user data from users.json
    this.userService.getAccessList().subscribe(
      data => {
        //this.userData = data;
        that.userData = Object.assign([], JSON.parse(JSON.stringify(data)));
        console.log(that.userData);
        // this.userData = data;
      //  this.listData = Object.assign([], data);//JSON.stringify(data);
        this.listData = JSON.parse(JSON.stringify(data));
      },
      error => {
        console.log("Something wrong here");
      });    
  }  

  getUserIdsFirstWay($event) {
    debugger;
    let userId = (<HTMLInputElement>document.getElementById('accessName')).value;
    this.userList1 = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.userData, userId);
      }
    }
  }  

  searchFromArray(arr, regex) {
    let matches = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };

}
