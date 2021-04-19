import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase  from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  fname: string = "";
  lname: string = "";
  email: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth, private route: Router) { }

  ngOnInit() {
  }

  async register(){
    const { fname, lname, email, password } = this;

    try{
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.route.navigate(['/phone']);
      console.log(res);
    }catch(err){
      console.dir(err);
    }
    
  }



}
