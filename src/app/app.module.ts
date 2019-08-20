import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { HomeComponent } from './Access/home.component';
import { AccessListComponent } from './Access/access-list.component';
import { AccessDetailsService } from './Access/Service/accessDetailsService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    AccessListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, AccessDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
