import { Component, OnInit } from '@angular/core';
import{FormationService} from '../../services/formation.service';
//import {FormationService} from '/services/formation.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Task: any=[] ;

  constructor(private formationService: FormationService) { this.readFormation();
  }

  ngOnInit(): void {
  }
  readFormation(){
    this.formationService.getformation().subscribe((data)=>{
      this.Task=data ;
    })
  }

}
