import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FromulaireService } from '../crud/services/fromulaire.service'

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  articleFrom = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      auteur: new FormControl('', Validators.required),
      exclusivite: new FormControl('true'),
      sujet: new FormControl('', Validators.required),
      langue: new FormControl('', Validators.required),
      intro: new FormControl(),
  });

  validMessage: string = ""

  constructor(private service : FromulaireService, private router: Router) { }

  ngOnInit(): void {
  }

  get form(){
    return this.articleFrom.controls;
  }

  onSubmit(){
    console.log(this.articleFrom.value)
    if(this.articleFrom.valid){
      this.service.post(this.articleFrom.value).subscribe(data => {
        this.articleFrom.reset();
        this.router.navigateByUrl('/crud',);
      })
    }
    else {
      this.validMessage="SVP remplir le formulaire avant de le soumettre!";
    }
  }
}