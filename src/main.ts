import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { AppMenu} from './app/menu/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';


const routes: Routes = [];

  bootstrapApplication(AppMenu, {
    providers: [provideAnimationsAsync(), provideRouter(routes)],
    }).catch((err) => console.error(err));
  


/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
