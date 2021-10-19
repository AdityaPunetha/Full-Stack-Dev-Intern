import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor() {}
  ngOnInit(): void {}
  onSubmit() {
    if (!this.username) {
      alert('Please enter username!');
      return;
    }
    if (!this.password) {
      alert('Please add password!');
      return;
    }
    console.log(this.username);
    // sessionStorage.setItem('favoriteMovie', 'Shrek');
    location.href = '/cart';
  }
}
