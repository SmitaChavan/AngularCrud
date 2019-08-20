import {Injectable} from '@angular/core';
import {Employee} from '../model/employee.model';

@Injectable()
export class EmployeeService{
private listEmployee : Employee[]=
[
    {id: 1,
  name: 'smita',
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
];

    getEmplyees() : Employee[]
    {
        return this.listEmployee;
    }

    saveEmp(employee: Employee) 
    {
        this.listEmployee.push(employee);
    }
} 