import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;


  constructor( private dataService: DataService,
              private navCtrl: NavController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  onClick(user : any){
    console.log(user)
    this.navCtrl.navigateRoot('/card');

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
