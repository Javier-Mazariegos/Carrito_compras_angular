import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './services/interceptors/error.interceptor';
import { loadingInterceptor } from './services/interceptors/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, withComponentInputBinding()),
     provideClientHydration(withEventReplay()),
     provideHttpClient(
      withInterceptors([errorInterceptor, loadingInterceptor])
     ),
    importProvidersFrom([BrowserAnimationsModule])]
};
