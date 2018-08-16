import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { PersonQueryComponent } from './person-query/person-query.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    PersonQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
