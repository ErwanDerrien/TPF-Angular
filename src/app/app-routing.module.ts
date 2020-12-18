import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { Error404Component } from './application/error404/error404.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';


const routes: Routes = [
  {path:'tutoriel',
    children:[
      {path:':id', component:TutorielComponent},
    ]},
  
  {path:'afficherForm/:articleId', component: AfficherComponent},
  {path:'updateForm/:articleId', component: UpdateComponent},
  {path:'fromulaire', component:FormulaireComponent, children: [
    {path:'id', component:TutorielComponent}
  ]},
  {path:'crud', component:ReadComponent},
  {path:'fun', component:FunComponent},
  {path:'contact', component:ContactComponent},
  {path:'home', component:HomeComponent},
  {path:'error', component:Error404Component},

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
