import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auth0';

  constructor(public auth:AuthService){

  }

  login(){
    this.auth.loginWithRedirect();
  }

  salir(){
    this.auth.logout();
  }
}
