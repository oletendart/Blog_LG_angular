import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { DescriptionComponent } from './description/description.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, CarouselComponent, CardsComponent, DescriptionComponent, CreditsComponent ],
  bootstrap:    [ AppComponent, NavbarComponent ]
})
export class AppModule {}
