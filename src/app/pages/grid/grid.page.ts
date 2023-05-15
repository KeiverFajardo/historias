import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { personas } from 'src/assets/data/personas';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  usuarios!: any[];

  @ViewChild(IonList) ionList!: IonList;


  constructor( private dataService: DataService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.usuarios = personas;
  }

  onClick(user : any){
    console.log(user)
    this.navCtrl.navigateRoot('/card/' + user.id);

  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }

}
