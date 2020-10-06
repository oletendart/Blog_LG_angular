import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { DescriptionComponent } from './components/description/description.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CardComponent } from './components/card/card.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        })
        ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, CarouselComponent, CardsComponent, DescriptionComponent, CreditsComponent, CardComponent ],
  bootstrap:    [ AppComponent, NavbarComponent ]
})
export class AppModule {}
