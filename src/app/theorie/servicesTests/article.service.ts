import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GenericService } from '../../application/crud/services/generic.service';
import { Article } from '../../application/crud/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends GenericService<Article, Number>{

  constructor(http: HttpClient) { 
    super(http, "http://localhost:3220/api")
  }
}
