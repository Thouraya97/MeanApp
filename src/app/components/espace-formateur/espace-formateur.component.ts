import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur.service';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-espace-formateur',
  templateUrl: './espace-formateur.component.html',
  styleUrls: ['./espace-formateur.component.css']
})
export class EspaceFormateurComponent implements OnInit {
  email : string ;
  name : string ;
  password : string ; 
  //candidatForm : FormGroup ;

  constructor(private formateurService: FormateurService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLoginForma(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const user={
       email:this.email,
       password:this.password
     }
 
     this.formateurService.loginFormateur(user).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         else if (resp.success){console.log('login success') ;
         this.router.navigate(['/espace-formateur/mesformations']);
        }
         
       }
       
       );
   }
}
