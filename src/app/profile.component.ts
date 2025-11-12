import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  template: `
    <h2>Профіль</h2>
    <p>Ви увійшли як: <strong>Admin</strong></p>
    <button (click)="logout()" style="padding:8px 16px;">Вийти</button>
  `
})
export class ProfileComponent {
  auth = inject(AuthService);

  logout() {
    this.auth.logout();
  }
}