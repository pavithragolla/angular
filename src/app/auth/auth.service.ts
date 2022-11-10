import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  login(form: LoginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (form.password != form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.isAuthenticated = false;

        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      // console.log(this.submit);
      .finally(() => (this.isLoading = false));
  }

  constructor(private router: Router) {}

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        alert('error');
      });
  }
}
