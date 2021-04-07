import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../../services/rest-api.service";
import {first} from "rxjs/operators";
import { Router } from '@angular/router';
import {User} from "../../../models";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users = null;

  constructor(private accountService: RestApiService, private router: Router) {}

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);

    this.user = this.accountService.userValue;
  }
  public removeHandler({dataItem}) {
    this.deleteUser(dataItem.id);
  }
  public editHandler({dataItem}) {
    this.router.navigate(['/dashboard/edit', dataItem.id]);
  }

  user: User;

  logout() {
    this.accountService.logout();
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter(x => x.id !== id));
  }
}

