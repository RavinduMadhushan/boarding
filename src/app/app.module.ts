import { AuthServiceService } from './auth-service.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostadComponent } from './postad/postad.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatCardModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { CommonModule } from '@angular/common';
import { ValidatorDirective } from './compare/validator.directive';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    PostadComponent,
    SigninComponent,
    SignupComponent,
    CarouselComponent,
    LoginComponent,
    ValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule.forRoot(),
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},  
      { path : 'login', component : LoginComponent},
      { path : 'aboutus', component : AboutUsComponent},
      { path : 'Postad', component : PostadComponent},
      { path : 'signup', component : SignupComponent},
    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
    RegisterService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
