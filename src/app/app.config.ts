import { ApplicationConfig } from '@angular/core';
import { IMAGE_CONFIG } from '@angular/common';
import {
  provideRouter,
  withViewTransitions,
  withInMemoryScrolling,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideAnimations(),
    // The logo is intentionally sized at ~2x for retina sharpness, which is
    // larger than its rendered size; silence Angular's dev-only oversize /
    // lazy-load image warnings so the console stays clean.
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
};
