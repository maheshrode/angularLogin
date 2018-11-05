import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'welcome-component', component: WelcomeComponentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
