import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee!: Employee[];
  pageEvent!: PageEvent;
  employee1!: Employee[];
  page = 0;
  size = 4;
public pageSize = 4;
public currentPage = 0;
public totalSize = 0;
public displayedColumns = ['', '', '', '', ''];
public dataSource: any; 

@ViewChild(MatPaginator) paginator!: MatPaginator;
  employeecount= 50;
  
  
  constructor( private _router: Router, private _service: EmployeeService) {
    
   }


  ngOnInit() {
     this._service.getEmployees().subscribe( (emp) => 
      {
        this.employee=emp;
        this.dataSource = this.employee;
        this.dataSource.paginator = this.paginator;
        this.totalSize = this.employee.length;
        this.iterator();
      });
     
  }

  ViewEmployee(empid: number){
    this._router.navigate(['/employee', empid] );
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.employee.slice(start, end);
    this.dataSource = part;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
}
