import { Component, OnInit } from '@angular/core';
import{AdminService}from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

  name: string;
  owner:string;
  done :string;
  submitted = false;
  constructor(private adminService:AdminService,
    private http: HttpClient,) { }

  ngOnInit(): void {
  }
  Formation(){
    if (!this.name || !this.owner || !this.done){
       console .log('all fields are required');
       return false;
     }
     const formation={
       name:this.name,
       owner:this.owner,
       done:this.done
     }
 
     this.adminService.addFormation(formation).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         console.log('formation ajoutée') ;
       }
       );
   }
}

