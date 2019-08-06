import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NewsComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule
	],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
