import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ДОДАТИ

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // ДОДАТИ CommonModule
  template: `
    <h2>Вхід</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div style="margin-bottom:10px;">
        <input formControlName="username" placeholder="Логін" style="padding:8px;width:200px;" />
      </div>
      <div style="margin-bottom:10px;">
        <input formControlName="password" type="password" placeholder="Пароль" style="padding:8px;width:200px;" />
      </div>
      <button type="submit" style="padding:8px 16px;">Увійти</button>
    </form>

    <p *ngIf="error" style="color:red;margin-top:10px;">{{ error }}</p>
  `,
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  error = '';

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    const { username, password } = this.form.value;
    if (this.auth.login(username!, password!)) {
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Ім\'я користувача або пароль введені не правильно';
    }
  }
}