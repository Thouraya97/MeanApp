import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  email : string ;
  name : string ;
  password : string ; 
  //candidatForm : FormGroup ;

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLoginAdmin(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const user={
       email:this.email,
       password:this.password
     }
 
     this.adminService.loginAdmin(user).subscribe(
       resp =>{
         if(!resp.success){console.log('error');}
         else if (resp.success){console.log('login success') ;
         this.router.navigate(['admin/navadmin']);
        }
         
       }
       
       );
   }


}
