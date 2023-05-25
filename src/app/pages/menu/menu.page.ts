import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { menu } from 'src/assets/data/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes?: Componente[];

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
    this.componentes = menu;
  }

  onClick(){
    this.navCtrl.navigateRoot('/home');
  }

}
