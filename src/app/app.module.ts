import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormulairesComponent } from './theorie/formulaires/formulaires.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CreateComponent } from './application/crud/create/create.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { HomeComponent } from './application/home/home.component';
import { Error404Component } from './application/error404/error404.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';
@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    NavbarComponent,
    FooterComponent,
    TutorielComponent,
    FormulaireComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FunComponent,
    ContactComponent,
    HomeComponent,
    Error404Component,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //Rencontre22
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
