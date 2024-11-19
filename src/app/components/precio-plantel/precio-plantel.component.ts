import { Component, OnInit } from '@angular/core';
import {PrecioPlantel} from '../../models/precio-plantel';
import {PrecioPlantelService} from '../../services/precio-plantel.service';
import { ImportsModule } from '../../menu/importsNG';

@Component({
  selector: 'app-precio-plantel',
  templateUrl: './precio-plantel.component.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [PrecioPlantelService] //Se pone el service en el providers 
})
export class PrecioPlantelComponent {


  public precios: PrecioPlantel[];
  public title: string;


  constructor(private precioPlantelService: PrecioPlantelService) {
    this.title = 'Precios en plantel';
  }

  ngOnInit(): void {
    
    this.precioPlantelService.getPrecioPlantel().subscribe(
      (precios: PrecioPlantel[]) => {
        this.precios = precios;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
