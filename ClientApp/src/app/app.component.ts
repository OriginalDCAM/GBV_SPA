import { Component } from '@angular/core';

import { RestApiService } from './services/rest-api.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  user: User;

  constructor(private RestApiService: RestApiService) {
    this.RestApiService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.RestApiService.logout();
  }
}
