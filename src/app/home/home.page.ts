import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "Bienvenido!";
  subtitle: string = "Información Adicional!";
  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }
  nombre!: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params["nombre"]) {
        this.nombre = params["nombre"];
      } else {
        this.navCtrl.navigateForward('/login');
      }
    })
  }
}
