import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee!: Employee;
  
  constructor(private _route: ActivatedRoute, private _service: EmployeeService) { }

  ngOnInit() {

    const id= +this._route.snapshot.params['id'];
    this._service.getEmployee(id).subscribe(emp => this.employee=emp);

  }


}
