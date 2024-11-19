import { Component, OnInit } from '@angular/core';
import {ImportsModule} from './importsNG';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.html',
  standalone: true,
  imports: [ImportsModule]
})

export class AppMenu implements OnInit{


  items: MenuItem[]|undefined;

  constructor(private router: Router) { }


  ngOnInit() {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home', route: '/menu' },
      {
        label: 'Precios al Consumidor',
        icon: 'pi pi-fw pi-car',
        command:() => {this.router.navigate(['/preciosConsumidor']);}
      },
      {
        label: 'Precios de Plantel',
        icon: 'pi pi-fw pi-warehouse',
        command:() => {this.router.navigate(['/preciosPlantel']);}
      }
    ];
    }

}
