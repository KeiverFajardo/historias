import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor( private alertCtrl: AlertController,
              private navCtrl: NavController ) { }

  ngOnInit() {
    this.presentAlertMultipleButtons();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss : false,
      header: '¿Tienes una historia para contar?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.navigateRoot('/form-contact');
            console.log('click en ok!')
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.navCtrl.navigateRoot('/home');
            console.log('click en No!')
          }
        }
      ]
    });

    await alert.present();
  }


}
