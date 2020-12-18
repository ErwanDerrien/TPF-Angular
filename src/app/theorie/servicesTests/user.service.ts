import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GenericService } from '../../application/crud/services/generic.service';
import { User } from '../interfacesTests/user';


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User, Number>{

  constructor(http: HttpClient) { 
    super(http, "http://localhost:3220/api")
  }
}
