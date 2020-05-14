import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { PersonQueryComponent } from './person-query/person-query.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { AlterComponent } from './common/alter/alter.component';
import { ProgressComponent } from './common/progress/progress.component';
import {TitleService} from './service/title.service';
@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    PersonQueryComponent,
    RegisterComponent,
    AlterComponent,
    ProgressComponent
  ],
  providers: [ TitleService ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(titleService: TitleService) {
    titleService.getTitle();
  }
}
