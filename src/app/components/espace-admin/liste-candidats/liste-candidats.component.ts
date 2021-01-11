import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.css']
})
/*export class Candidat {
  email : string ;
  name : string ;
  password :string;
  submitted= false ;
}*/
export class ListeCandidatsComponent implements OnInit {
 /* candidats: Candidat[] ;
  candidat: Candidat ;
  email : string ;
  name : string ;
  password :string;*/
User: any=[];

  constructor(private adminService:AdminService,
    private http: HttpClient,
    ) {/*this.listeCandidat()*/ 
    this.readCandidat() ;}

  ngOnInit(): void {
  }
  /*listeCandidat(){
    this.adminService.getCandidats().subscribe((data) => {
this.Candidat=data ;     })    
  }*/
/*listeCandidat () {
  

  this.adminService.getCandidats(user).subscribe(
     candidats: Candidat[])=>
     this.candidats = this.candidats);

    );
}
}*/
readCandidat(){
  this.adminService.getCandidats().subscribe((data)=>{
    this.User=data ;
  })
}


}
