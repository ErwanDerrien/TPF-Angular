import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { FromulaireService } from '../services/fromulaire.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listArticles: Array<Article>;
  public headElements = ['Id', 'Titre', 'Auteur', 'Sujet', 'Langue', 'Operations']
  estVide: number;

  constructor( private service: FromulaireService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void{
    this.service.findAll().subscribe(data => {
      this.listArticles=data;
      this.estVide = this.listArticles.length;
    }, (err) => {
      console.log('err');
    });

  }

  public delete(id: number, index: any) {
    if(window.confirm('Êtes-vous certain ?')) {
      this.service.deleteById(id).subscribe(() => {
        this.listArticles.splice(index, 1);
      }, (err) => {
        console.log('err');
      });
    }
  }
}

