import { Component, OnInit, Output } from '@angular/core';
import { PacientesService} from '../../services/pacientes.service';
import{PacientComponent} from '../pacient/pacient.component';

import{Route,Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-list.component.html',
  styleUrls: ['./pacient-list.component.css']
})

export class PacientListComponent implements OnInit {


  pacientes: any = [];
  regristros: any = [];


  constructor(private pacienstesService : PacientesService,private router:Router) { }

  ngOnInit(): void {

    this.pacienstesService.getAllPacients().subscribe(
      res =>{
        this.pacientes = res;
      },
      err => console.error(err)
    );
    
  }

  

  CallOne(CC:number){
    
    this.pacienstesService.Callone(CC).subscribe(
      res =>{
        this.regristros = res;
        console.log(this.regristros);
        this.router.navigate(['/lista/paciente']);
        
      },
      err => console.error(err)
    );
  }


  
}
