import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: any = { username: '', password: '' };
  submitted = false;
  loadingController: LoadingController;

  constructor(
     public router: Router,    
     public loadingCtrl: LoadingController
  ) { }
  
  onLogin(form: NgForm) {
    this.submitted = true;

    this.showLoadingOverlay(form);


  }

  async showLoadingOverlay(form: NgForm) {
    const loading = await this.loadingCtrl.create({
      spinner: "circular",
      duration: 1000,
      message: 'Logging In',
      translucent: true
    });
    await loading.present();
    await loading.onDidDismiss().then((overlayDetail) => { if (form.valid) {
      this.router.navigateByUrl('/app/tabs/dashboard');
    }});
  }

}
