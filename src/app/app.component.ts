import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { LoginPageComponent } from 'shop-folder-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  phoneEmailSubmitResponse = new Subject<any>();

  handlePhoneEmailSubmit(phoneEmail: string) {}

  handleOTPSubmit(otp: string) {}

}
