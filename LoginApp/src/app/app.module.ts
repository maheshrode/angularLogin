import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './register/email/email.component';
import { HomeComponent } from './register/home/home.component';
import { UsernameComponent } from './register/username/username.component';
import { FormsModule } from '@angular/forms';





const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponentComponent
  },
  {
    path: 'welcome-component',
    component: WelcomeComponentComponent
  },
  {
    path: 'Register',
    component: RegisterComponent,
    children:[
      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'email',
        component: EmailComponent
      },
      {
        path: 'username',
        component: UsernameComponent
      }
    ]

  }
  ,
 
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomeComponentComponent,
    RegisterComponent,
    EmailComponent,
    HomeComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
