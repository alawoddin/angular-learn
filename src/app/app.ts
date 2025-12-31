import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, ɵEmptyOutletComponent, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // isLogin: Boolean = false;
  isLogin: Boolean = false;
  Username: String = "alawoddin";

  isAdmin: Boolean = false;
  isUser: Boolean = false;
  isGuest: Boolean = true;

  count:  number = 0;
  loginbutton() {
    this.count++;
    console.log("i click the button " + this.count)
  }

  userRoles: string = 'Admin';

  isColor: boolean = true;


}
