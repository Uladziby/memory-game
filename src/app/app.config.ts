import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  LucideAngularModule,
  Home,
  User,
  CircleX,
  Settings,
  Gamepad2,
  RotateCcw,
} from 'lucide-angular';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Home,
        User,
        CircleX,
        Settings,
        Gamepad2,
        RotateCcw,
      })
    ),
    provideAnimationsAsync(),
  ],
};
