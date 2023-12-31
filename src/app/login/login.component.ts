import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginPageComponent } from 'shop-folder-component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  phoneEmailSubmitResponse = new Subject<any>();

  constructor(private router: Router) {}

  handlePhoneEmailSubmit(phoneEmail: string) {}

  handleOTPSubmit(otp: string) {}

  handleContinueClick() {
    this.router.navigateByUrl('/home')
  }
}
