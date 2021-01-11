import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:String;
  Form:any = [];
  searchCriteria: string;
  constructor(private formservice:FormationService) { }


  ngOnInit(): void {
  }

  getformation()
  {
    console.log(this.searchCriteria);
   let name=this.searchCriteria;
    this.formservice.getformationByTag(name).subscribe(res => {
     this.Form= res;
      console.log(this.Form);
      
    })
}


}
