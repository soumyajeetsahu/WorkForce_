import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import {Employee} from '../model/employee.model'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
  
  employee: Employee={

    id: 0,
    FirstName: '',
    LastName:'',
    Email:'',
    avatar:'',


  }
  constructor(private _service: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  AddEmployee(emp: Employee):void{

    if(emp.avatar== ''){
      emp.avatar="assets/Images/p-01.png"
    }
    this._service.addNewEmployee(this.employee).subscribe(
      (data: Employee) => {
        // log the employee object after the post is completed
        console.log(data);
        
        this._router.navigate(['employees']);
      },
      (error: any) => { console.log(error); }
    );
  }
}
