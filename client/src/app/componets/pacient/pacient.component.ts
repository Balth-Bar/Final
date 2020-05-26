import { Component, OnInit,Input } from '@angular/core';
import { PacientesService} from '../../services/pacientes.service';
import{PacientListComponent} from '../pacient-list/pacient-list.component';


import { from } from 'rxjs';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  @Input() CC: number;


  constructor(private pacienstesService : PacientesService) { }


  ngOnInit(): void {

    console.log(this.CC); 

  }

}


