import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: '', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./login.component').then(m => m.LoginComponent) },
  { path: 'news', loadComponent: () => import('./news.component').then(m => m.NewsComponent) },
  { path: 'profile', canActivate: [AuthGuard], loadComponent: () => import('./profile.component').then(m => m.ProfileComponent) },
  { path: 'products', loadComponent: () => import('./product-list.component').then(m => m.ProductListComponent) },
  { path: 'product/:id', loadComponent: () => import('./product-details.component').then(m => m.ProductDetailsComponent) },
  { path: 'cart', loadComponent: () => import('./cart.component').then(m => m.CartComponent) },
  { path: 'shipping', loadComponent: () => import('./shipping.component').then(m => m.ShippingComponent) },
  { path: '**', redirectTo: '' }
];