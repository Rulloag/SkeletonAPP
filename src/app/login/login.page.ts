import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
nombre!: string;
password!: number;
subtitle: string = "Aquí comienza todo";
  constructor(private ctrlNav:NavController) { }

  
  ngOnInit() {
  }
  

  Redirigir(){
    if (this.nombre == "Rodrigo" && this.password == 1234){
this.ctrlNav.navigateForward("/home",{
  queryParams:{nombre:this.nombre}
});

    }else {
      alert("Datos incorrectos")
    }
  }
}
