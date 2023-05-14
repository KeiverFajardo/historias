import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonTextarea, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.page.html',
  styleUrls: ['./form-contact.page.scss'],
})
export class FormContactPage implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  
  @ViewChild(IonTextarea) textarea!: IonTextarea;

  usuario = { 
    nombre : '',
    email: '',
    tlf: '',
    mensaje : ''
  }

  async onInput() {
    const element = await this.textarea.getInputElement();
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
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
