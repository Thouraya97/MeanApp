import { Component, OnInit } from '@angular/core';
import{CandidatService}from 'src/app/services/candidat.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-login-candidat',
  templateUrl: './login-candidat.component.html',
  styleUrls: ['./login-candidat.component.css']
})
export class LoginCandidatComponent implements OnInit {

  email:string;
  password :string;
  submitted = false;
    candidatForm: FormGroup;
  constructor( private candidatService: CandidatService,
   private router: Router ) { }

  ngOnInit(): void {
  }
  onLogin(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const user={
       
       email:this.email,
       password:this.password
     }
 
     this.candidatService.loginUser(user).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         else if (resp.success){console.log('login success') ;
         this.router.navigate(['/espace-candidat/space']);
        }
         
       }
       
       );
   }
}
