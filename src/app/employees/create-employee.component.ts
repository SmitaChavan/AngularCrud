import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/Forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender = "female";
  constructor() { }

  ngOnInit() {
  }

  SaveEmployee(empData : NgForm) : void 
  {
      console.log(empData.value);
  }
}
