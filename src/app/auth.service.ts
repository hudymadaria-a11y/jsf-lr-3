import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(false);
  isLoggedIn = computed(() => this.loggedIn()); // Тепер повертає boolean

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '12345') {
      this.loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.set(false);
    this.router.navigate(['/login']);
  }
}