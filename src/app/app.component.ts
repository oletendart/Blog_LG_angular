import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

   param = {value: 'world'};

    constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

  changeLangage(locale:string) {
    this.translate.use(locale);
  }
}
