import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'employees', component: EmployeesComponent,},
  {path: 'addemployee', component: AddEmployeeComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
