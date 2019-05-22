import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] = [
  {id: 1,
  name: 'Mark',
  gender: 'Male',
  contactPreference: 'Email',
  email: 'mark@gmail.com',
  department: 'IT',
  isActive: true,
  photoPath: 'assets/images/Img1.png'
  },
  {id: 2,
    name: 'Peter',
    gender: 'Male',
    contactPreference: 'Email',
    email: 'peter@gmail.com',
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Img2.png'
    },
    {id: 1,
      name: 'Rose',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'rose@gmail.com',
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/Img3.png'
      }
]
  constructor() { }

  ngOnInit() {
  }

}
