import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { FromulaireService } from '../services/fromulaire.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  id: number;
  article: Article = {} as Article;  
  updateArticleFrom: FormGroup;
  validMessage: string = ""

  get updatedForm(){
    return this.updateArticleFrom.controls;
  }

  constructor(private service: FromulaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['articleId'];
    
    this.service.getById(this.id).subscribe(data => {
      this.article = data;
    }, (err) => {
      console.log(err);
    });
    
  }


  public updateArticle() {
    this.service.put(this.id, this.updateArticleFrom.value).subscribe(() => {
      this.router.navigateByUrl('crud')
    }, (err) => {
      console.log(err);
    });
  }
}
