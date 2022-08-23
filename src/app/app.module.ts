import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-66m7s2a6.us.auth0.com',
      clientId: 'frP0gh0uIQphIGQ8rjGz1kvuV3KUlxDI',
      cacheLocation: 'localstorage',
      useRefreshTokens:true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
