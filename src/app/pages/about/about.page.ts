import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    const swiper1 = new Swiper('.carrusel-1', {
      navigation: {
        nextEl: '.carrusel-1-next',
        prevEl: '.carrusel-1-prev',
      },
    });

    const nextButton = document.querySelector('.carrusel-1-next');
    const prevButton = document.querySelector('.carrusel-1-prev');

    nextButton!.addEventListener('click', () => {
      swiper1.slideNext();
    });

    prevButton!.addEventListener('click', () => {
      swiper1.slidePrev();
    });
  }

  items = [
    { avatarUrl: 'https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/I1.jpeg', label: 'Etiqueta 1' },
    { avatarUrl: 'https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/I1.jpeg', label: 'Etiqueta 2' },
    { avatarUrl: 'https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/I1.jpeg', label: 'Etiqueta 3' },
  ];
  
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  
  @ViewChild(IonTextarea) textarea!: IonTextarea;
  @ViewChild('slides') slides: any;


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
