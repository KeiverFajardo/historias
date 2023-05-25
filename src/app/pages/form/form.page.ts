import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { menu } from 'src/assets/data/menu';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  componentes?: Componente[];

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
    this.componentes = menu;
  }

  onClick(){
    this.navCtrl.navigateRoot('/');
  }


  /* constructor( private alertCtrl: AlertController,
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
          cssClass: 'blanco',
          handler: () => {
            this.navCtrl.navigateRoot('/form-contact');
            console.log('click en ok!')
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'blanco',
          handler: () => {
            this.navCtrl.navigateRoot('/home');
            console.log('click en No!')
          }
        }
      ]
    });

    await alert.present();
  } */


}
