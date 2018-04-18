import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";
import {SignupPage} from '../signup/signup';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthService,
              public formBuilder: FormBuilder,
              private alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        (res) => {
          console.log(JSON.stringify(res, null));
          let alert = this.alertCtrl.create({
            subTitle: 'Login Successful.',
            buttons: [{
              text: 'Ok',
              handler: data => {
                this.navCtrl.push(HomePage);
              }
            }]
          });
          alert.present();
        },
        (error) => {
          this.loginError = error.message;
        }
      );
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        (res) => {
          console.log(JSON.stringify(res, null));
          let alert = this.alertCtrl.create({
            subTitle: 'Login Successful.',
            buttons: [{
              text: 'Ok',
              handler: data => {
                this.navCtrl.setRoot(HomePage);
              }
            }]
          });
          alert.present();
        },
        error => console.log(error.message)
      );
  }
}
