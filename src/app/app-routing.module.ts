import { BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { AccessListComponent } from './Access/access-list.component';

const appRoutes: Routes = [
    {path: 'list', component: ListEmployeesComponent},
    {path: 'create', component: CreateEmployeeComponent},
    {path: 'accessList', component: AccessListComponent},
    {path: '',redirectTo: '/list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
