import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = "Bienvenido"
  subtitle: string = "";
  fechaNacimiento: string = "";
  nombre: string = "";
  apellido: string = "";

  mostrarFechaNacimiento(): void {
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    // Puedes mostrar la fecha en el formato deseado o realizar otras acciones aquí
  }

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }
  
  getFechaNacimiento(): string {
    return this.fechaNacimiento;
  }
  
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
