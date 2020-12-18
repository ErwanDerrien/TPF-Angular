import { Component, OnInit } from '@angular/core';
import { Article } from '../crud/models/article';
import { FromulaireService } from '../crud/services/fromulaire.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listArticles: Array<Article>;
  estVide: number;

  constructor( private service: FromulaireService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void{
    this.service.findAll().subscribe(data => {
      // Limite à deux articles pour la page d'accueil
      data.length = Math.min(data.length, 2);
      this.listArticles=data;
      this.estVide = this.listArticles.length;
    }, (err) => {
      console.log('err');
    });

  }
}
