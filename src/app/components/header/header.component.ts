import { Component, Input } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() titulo: string = '';

  componentes?: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
              private dataService: DataService,
              private navCtrl: NavController) { }


  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
            
  mostrarMenu() {
    this.menuCtrl.open('first');
  }

  onClick(){
    this.navCtrl.navigateRoot('/menu');
  }

}
