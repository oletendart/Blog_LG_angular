import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { DescriptionComponent } from './description/description.component';
import { CreditsComponent } from './credits/credits.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TranslateModule.forRoot()],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, CarouselComponent, CardsComponent, DescriptionComponent, CreditsComponent, CardComponent ],
  bootstrap:    [ AppComponent, NavbarComponent ]
})
export class AppModule {}
