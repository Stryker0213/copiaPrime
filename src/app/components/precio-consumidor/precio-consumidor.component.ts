import { Component } from '@angular/core';
import { ImportsModule } from '../../importsNG';
import { PrecioConsumidorService } from '../../services/precio-consumidor.service';
import { PrecioConsumidor } from '../../models/precio-consumidor ';

@Component({
  selector: 'app-precio-consumidor',
  templateUrl: './precio-consumidor.component.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [PrecioConsumidorService], //Se pone el service en el providers
})
export class PrecioConsumidorComponent {
  public precios: PrecioConsumidor[];
  public title: string;

  constructor(private precioConsumidorService: PrecioConsumidorService) {
    this.title = 'Precios al consumidor';
  }

  ngOnInit(): void {
    this.precioConsumidorService.getPrecioConsumidor().subscribe(
      (precios: PrecioConsumidor[]) => {
        this.precios = precios;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
