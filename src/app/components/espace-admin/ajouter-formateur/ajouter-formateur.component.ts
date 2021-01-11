import { Component, OnInit } from '@angular/core';
import{AdminService}from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {

  name: string;
  email:string;
  password :string;
  submitted = false;
  constructor(private adminService:AdminService,
    private http: HttpClient,) { }

  ngOnInit(): void {
  }
  addForma(){
    if (!this.name || !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const forma={
       name:this.name,
       email:this.email,
       password:this.password
     }
 
     this.adminService.createAccount(forma).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         console.log('formateur ajouté') ;
       }
       );
   }

}
