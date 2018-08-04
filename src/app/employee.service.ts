import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }
}
