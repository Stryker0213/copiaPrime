import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config} from './app.config.server';

import { AppMenu} from './app/menu/menu';

const bootstrap = () => bootstrapApplication(AppMenu, config);

//const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
