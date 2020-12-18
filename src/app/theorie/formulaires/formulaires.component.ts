import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../user';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {

  user: User = {
    name : '',
    password:'123456',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: ' Vendredi 20 novembre 2020'
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit(form1: NgForm) {
    console.log('Data recue : ', form1.valid);
    console.log(form1.value);
  } 

}
