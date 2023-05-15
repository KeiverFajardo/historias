import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personas } from 'src/assets/data/personas';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

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
