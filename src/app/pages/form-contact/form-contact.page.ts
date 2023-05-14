import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.page.html',
  styleUrls: ['./form-contact.page.scss'],
})
export class FormContactPage implements OnInit {

  usuario = { 
    nombre : '',
    email: '',
    tlf: ''
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit( formulario: NgForm ) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
    this.navCtrl.navigateRoot('/home');
  }

}
