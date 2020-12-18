import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GenericService } from '../../application/crud/services/generic.service';
import { Employee } from '../interfacesTests/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee, Number>{

  constructor(http: HttpClient) { 
    super(http, "http://localhost:3220/api")
  }
}
