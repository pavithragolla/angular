import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello</h1>',
  styleUrls: ['./app.component.css'],
  // styles: ['h1{color:blue}'],
})
export class AppComponent implements OnInit {
  // title = 'angular-crash-2';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
  logout() {
    this.authService.logout();
  }
}
