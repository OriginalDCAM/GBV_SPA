import { Component } from '@angular/core';
import { User } from "../../models";
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: User;

  constructor(private RestApiService: RestApiService) {
    this.user = this.RestApiService.userValue;
  }
  logout() {
    this.RestApiService.logout();
  }
}