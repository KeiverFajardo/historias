import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  items = [
    { avatarUrl: '../../../', label: 'Etiqueta 1' },
    { avatarUrl: 'ruta-del-avatar-2.jpg', label: 'Etiqueta 2' },
    { avatarUrl: 'ruta-del-avatar-3.jpg', label: 'Etiqueta 3' },
  ];
  
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

  onClick(){
    this.navCtrl.navigateRoot('/proximamente');
  }
}
