import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { FromulaireService } from '../services/fromulaire.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  article: Article = {} as Article;
  updateArticleFrom: FormGroup;
  validMessage: string = "";

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

    this.updateArticleFrom = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      auteur: new FormControl('', Validators.required),
      exclusivite: new FormControl('true'),
      sujet: new FormControl('', Validators.required),
      langue: new FormControl('', Validators.required),
      intro: new FormControl()
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
