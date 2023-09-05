import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: ActivatedRoute) {}
  nombre!: string;
  ngOnInit(){
    this.route.queryParams.subscribe(params =>{ 
      if(params && params["nombre"]){
        this.nombre=params["nombre"]; 
      }
    });
  }
}
