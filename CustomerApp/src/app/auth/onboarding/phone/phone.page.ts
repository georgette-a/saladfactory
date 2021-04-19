import { Component, OnInit } from '@angular/core';
// import * as firebase from "firebase/app";
import  firebase  from 'firebase/app';
import { NavController, PopoverController} from "@ionic/angular";
import { Session } from 'node:inspector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {


  code: string = "+233" //Default country code;
  spin: boolean = false;//spinner
  otpSent: boolean = false; //OTP sent status

  recaptchaVerifier;
  confirmationResult: firebase.auth.ConfirmationResult;

  phoneNumber: string; //set value after otp is sent


  constructor( public nav: NavController, public popoverController: PopoverController, private route: Router) {

    setInterval(() => {
      if(sessionStorage.getItem("code")) {
        this.code = sessionStorage.getItem("code");
      }
    }, 100);
   }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
  }

  showCodes(){
    this.nav.navigateForward("/country-codes");
  }

  sendOTP(){
    var phNo = this.code + (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    this.spin = true;

    firebase.auth().signInWithPhoneNumber(phNo, this.recaptchaVerifier).then(result =>{
      this.phoneNumber = phNo;
      this.otpSent = true;
      this.confirmationResult = result;
      this.spin = false;
      this.route.navigate(['/verify-phone']);
    }).catch(err =>{
      this.spin = false;
      alert(err);
    })
  }

}
