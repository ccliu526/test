import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import {KSSwiperModule} from 'angular2-swiper';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category.component';
import { HeaderComponent } from './header.component';
import { CompanyComponent } from './company/company.component';
import { LoginTComponent } from './login-t/login-t.component';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    HeaderComponent,
    CompanyComponent,
    LoginTComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    KSSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
