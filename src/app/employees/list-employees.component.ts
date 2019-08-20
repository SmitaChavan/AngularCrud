import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  constructor(private _empservice: EmployeeService) { }

employees: Employee[];
  ngOnInit() {

    this.employees = this._empservice.getEmplyees();
  }

}
