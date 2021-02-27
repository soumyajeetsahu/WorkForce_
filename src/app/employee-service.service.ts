import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _http: HttpClient) { }



getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>('http://localhost:3000/employees');
}

getEmployee(id : number):  Observable<Employee> {
    return this._http.get<Employee>('http://localhost:3000/employees/'+id);
}

addNewEmployee(emp:Employee): Observable<Employee> 
{

    return this._http.post<Employee>('http://localhost:3000/employees',
        emp, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
    })


}

}
