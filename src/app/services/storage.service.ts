import { Injectable } from '@angular/core';

const LOGGED_IN = 'APP.LOGGED_IN';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get loggedIn(): boolean {
    return localStorage.getItem(LOGGED_IN) === 'true';
  }

  setLoggedIn(loggedIn = true) {
    localStorage.setItem(LOGGED_IN, String(loggedIn));
  }
}
