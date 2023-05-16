import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { menu } from 'src/assets/data/menu';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes?: Componente[];

  constructor(
    private platform: Platform,
/*     private splashScreen: SplashScreen,
    private statusBar: StatusBar, */
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
/*       this.statusBar.styleDefault();
      this.splashScreen.hide(); */
      this.componentes = menu;
    });
  }

}
