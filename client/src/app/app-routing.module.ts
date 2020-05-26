import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PacientListComponent} from './componets/pacient-list/pacient-list.component';
import{PacientComponent} from './componets/pacient/pacient.component';
import{LoginComponent} from './componets/login/login.component';
import{IndexComponent} from './componets/index/index.component'; 



const routes: Routes = [
  {
    path: '',   
    redirectTo:'/index',
    pathMatch : 'full'
  },


  {
    path:'index',
    component: IndexComponent
  },


  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'lista',
    component: PacientListComponent
  },

  {
    path:'lista/:CC',
    component: PacientComponent
  
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
