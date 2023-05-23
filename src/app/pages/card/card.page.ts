import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { personas } from 'src/assets/data/personas';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit, AfterViewInit  {

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    nextButton!.addEventListener('click', () => {
      swiper.slideNext();
    });

    prevButton!.addEventListener('click', () => {
      swiper.slidePrev();
    });

    //Carrucel 2
    const swiper2 = new Swiper('.carrusel-2', {
      navigation: {
        nextEl: '.carrusel-2-next',
        prevEl: '.carrusel-2-prev',
      },
    });

    const nextButton2 = document.querySelector('.carrusel-2-next');
    const prevButton2 = document.querySelector('.carrusel-2-prev');

    nextButton2!.addEventListener('click', () => {
      swiper2.slideNext();
    });

    prevButton2!.addEventListener('click', () => {
      swiper2.slidePrev();
    });

    //Carrucel 3
    const swiper3 = new Swiper('.carrusel-3', {
      navigation: {
        nextEl: '.carrusel-3-next',
        prevEl: '.carrusel-3-prev',
      },
    });

    const nextButton3 = document.querySelector('.carrusel-3-next');
    const prevButton3 = document.querySelector('.carrusel-3-prev');

    nextButton3!.addEventListener('click', () => {
      swiper3.slideNext();
    });

    prevButton3!.addEventListener('click', () => {
      swiper3.slidePrev();
    });

    //Carrucel 4
    const swiper4 = new Swiper('.carrusel-4', {
      navigation: {
        nextEl: '.carrusel-4-next',
        prevEl: '.carrusel-4-prev',
      },
    });

    const nextButton4 = document.querySelector('.carrusel-4-next');
    const prevButton4 = document.querySelector('.carrusel-4-prev');

    nextButton4!.addEventListener('click', () => {
      swiper4.slideNext();
    });

    prevButton4!.addEventListener('click', () => {
      swiper4.slidePrev();
    });
  }

  usuarios! : any[];
  usuario :any;
  id : number = 0;
  ids = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

      this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
      });

      this.usuarios = personas;
      this.usuario = this.usuarios.find((user) => user.id == this.id)
      console.log(this.usuario);
    };
}
