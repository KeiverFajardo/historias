import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { menu } from 'docs/assets/data/menu';
import { Componente } from 'src/app/interfaces/interfaces';

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
    this.navCtrl.navigateRoot('/');
  }

}
