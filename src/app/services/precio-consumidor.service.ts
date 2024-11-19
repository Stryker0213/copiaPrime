import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class PrecioConsumidorService {
  private urlConsumidor = 'https://api.recope.go.cr/ventas/precio/consumidor';
  constructor(private http: HttpClient) { }

  public getPrecioConsumidor(): Observable<any[]> {
    return this.http.get<any[]>(this.urlConsumidor  ).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(() => new Error('Error al obtener los precios al consumidor'));
      })
    );
  }
}
