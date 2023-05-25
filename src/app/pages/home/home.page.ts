import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { personas } from 'src/assets/data/personas';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
/* 
  images: string[] = [
    'https://raw.githubusercontent.com/KeiverFajardo/infoTecnology/version3/media/b2.jpg',
    'https://raw.githubusercontent.com/KeiverFajardo/infoTecnology/version3/media/b3.jpg',
    'https://raw.githubusercontent.com/KeiverFajardo/infoTecnology/version3/media/b4.jpg',
  ];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 1000);
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  }
 */

  /* slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  };
  
  usuario : any;

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

  onClick(){
    this.navCtrl.navigateRoot('/grid');
  }

  componentes?: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService,
               private navCtrl: NavController ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.usuario = personas[0];
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  } */

}

