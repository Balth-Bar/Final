import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  API_URI = 'http://localhost:3000/pacientes';

  constructor(private http :HttpClient ) { }


  getAllPacients (){
    return this.http.get(`${this.API_URI}/lista`);
  }

  
  Callone(CC:number){
    return this.http.get(`${this.API_URI}/lista/${CC}`);
  }



}
