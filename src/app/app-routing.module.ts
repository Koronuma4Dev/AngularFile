import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './components/navigate/navigate.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'Landingpage' , component:LandingpageComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'services' , component:ServicesComponent},
  {path: 'navigate', component:NavigateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
