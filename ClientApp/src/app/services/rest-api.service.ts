import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {retry, catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Bepaalt API
  apiURL = 'http://localhost:4000';

  // Bepaalt User
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

    // HttpClient API post() method => Maak gebruiker
  register(user: User) {
    return this.http.post(this.apiURL + `/users/register`, user);
  }

  login(username, password) {
    return this.http.post<User>(this.apiURL + `/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }
  logout() {
    // Verwijdert de gebruikers lokale gegevens en zet de huidige gebruiker naar null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  getAll() {
    // Haalt alle gebruikers op
    return this.http.get<User[]>(this.apiURL + `/users`);
  }

  getById(id: string) {
    // Haalt gebruiker op bij id
    return this.http.get<User>(this.apiURL + `/users/${id}`);
  }
  delete(id: string) {
    return this.http.delete(this.apiURL + `/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
  update(id, params) {
    return this.http.put(this.apiURL + `/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  }

