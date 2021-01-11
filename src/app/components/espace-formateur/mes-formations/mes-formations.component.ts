import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../../services/formateur.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-mes-formations',
  templateUrl: './mes-formations.component.html',
  styleUrls: ['./mes-formations.component.css']
})
export class MesFormationsComponent implements OnInit {
Mesformations : any=[];
searchCriteria: string;
  constructor(private formateurservice: FormateurService) {this.getmesforms(); }

  ngOnInit(): void {
  }
 getmesforms (){ 
  let owner=this.searchCriteria;
   this.formateurservice.getmesformations(owner).subscribe(
    
    (data)=>{
      this.Mesformations=data ;
     
    })
 }
}

