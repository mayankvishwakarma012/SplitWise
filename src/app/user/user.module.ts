import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';


const dashboardRoutes : Routes = [
  { path: '',component: LandingPageComponent},
  { path: 'login',component: LoginComponent},
  { path: 'signup', component: RegisterComponent }

]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
