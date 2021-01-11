import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { EspaceAdminComponent } from './components/espace-admin/espace-admin.component';
import { AjouterFormateurComponent } from './components/espace-admin/ajouter-formateur/ajouter-formateur.component';
import { AjouterFormationComponent } from './components/espace-admin/ajouter-formation/ajouter-formation.component';
import { AjouterSessionComponent } from './components/espace-admin/ajouter-session/ajouter-session.component';
import { ListeCandidatsComponent } from './components/espace-admin/liste-candidats/liste-candidats.component';
import { NavbaradminComponent } from './components/espace-admin/navbaradmin/navbaradmin.component';
import { EspaceCandidatComponent } from './components/espace-candidat/espace-candidat.component';
import { LoginCandidatComponent } from './components/espace-candidat/login-candidat/login-candidat.component';
import { RegisterCandidatComponent } from './components/espace-candidat/register-candidat/register-candidat.component';
import { EspaceFormateurComponent } from './components/espace-formateur/espace-formateur.component';
import { MesFormationsComponent } from './components/espace-formateur/mes-formations/mes-formations.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';
import { CandidatService } from './services/candidat.service';
import { FormateurService } from './services/formateur.service';
import { AdminService } from './services/admin.service';
import { FormationService } from './services/formation.service';
import { SearchComponent } from './components/search/search.component';
import { SpaceComponent } from './components/espace-candidat/space/space.component';
//import { SearchComponent } from './components/search/search.component';


const AppRoutes: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'espace-candidat/space',component:SpaceComponent},
  {path: 'espace-formateur', component:EspaceFormateurComponent},
  {path: 'espace-candidat',component:EspaceCandidatComponent},
{path: 'admin',component:EspaceAdminComponent},
//{path:'navbaradmin',component:NavbarAdminComponent},
{path:'admin/navadmin',component:NavbaradminComponent},
{path:'admin/ajouterformateur',component:AjouterFormateurComponent},
{path:'admin/ajouterformation',component: AjouterFormationComponent},
{path:'admin/ajoutersession',component: AjouterSessionComponent},
{path:'admin/listecandidats',component: ListeCandidatsComponent},
{path:'logincandidat',component:LoginCandidatComponent},
{path: 'registercandidat',component:RegisterCandidatComponent},
{path: 'home' , component: HomeComponent},
{path: 'espace-formateur/mesformations', component:MesFormationsComponent},
{path: 'espace-candidat/loginc', component:LoginCandidatComponent },
{path: 'espace-candidat/registerc',component:RegisterCandidatComponent},
{path:'search',component:SearchComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EspaceAdminComponent,
    AjouterFormateurComponent,
    AjouterFormationComponent,
    AjouterSessionComponent,
    ListeCandidatsComponent,
    NavbaradminComponent,
    EspaceCandidatComponent,
    LoginCandidatComponent,
    RegisterCandidatComponent,
    EspaceFormateurComponent,
    MesFormationsComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    CandidatService,
    FormateurService,
    AdminService,
    FormationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
