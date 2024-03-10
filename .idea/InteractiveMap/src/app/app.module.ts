import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule, HttpClient, HttpBackend, HttpHandler } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: (handler: HttpHandler) => {
        return new HttpClient(handler);
      },
      deps: [HttpHandler],
    },
    // other providers, if any
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }