import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './component/app/app';
import { appConfig } from './component/app/app.config';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
