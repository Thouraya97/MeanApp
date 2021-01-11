//import { Component, OnInit } from '@angular/core';
import { Component, OnInit,NgZone } from '@angular/core';
import{CandidatService}from 'src/app/services/candidat.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-register-candidat',
  templateUrl: './register-candidat.component.html',
  styleUrls: ['./register-candidat.component.css']
})
export class RegisterCandidatComponent implements OnInit {
  name: string;
email:string;
password :string;
submitted = false;
  //candidatForm: FormGroup;

  constructor(private candidatService: CandidatService,
    private router: Router



    ) { }

  ngOnInit(): void {
  }
  onRegister(){
    if (!this.name || !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const user={
       name:this.name,
       email:this.email,
       password:this.password
     }
 
     this.candidatService.createAccount(user).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         console.log('candidat created') ;
         this.router.navigate(['/espace-candidat/loginc']);
       }
       );
   }

}
