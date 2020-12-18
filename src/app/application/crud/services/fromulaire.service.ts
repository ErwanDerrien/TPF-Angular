import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService} from './generic.service'
import { Article } from '../models/article'

@Injectable({
  providedIn: 'root'
})
export class FromulaireService extends GenericService<Article, number> {

  constructor(http: HttpClient) { 
    super(http, "http://localhost:3004/api");
  }
}
