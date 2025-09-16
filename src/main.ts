import { bootstrapApplication } from '@angular/platform-browser';
import { configuration } from './configuration';
import { ApplicationComponent } from './app/application.component';

bootstrapApplication(ApplicationComponent, configuration)
  .catch((error: any) => console.error(error));
