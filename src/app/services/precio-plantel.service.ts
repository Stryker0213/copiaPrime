import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()


export class PrecioPlantelService {
  private urlPlantel = 'https://api.recope.go.cr/ventas/precio/plantel';

  constructor(private http: HttpClient) { }

  public getPrecioPlantel(): Observable<any[]> {
    return this.http.get<any[]>(this.urlPlantel).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(() => new Error('Error al obtener los precios en plantel'));
      })
    );
  }
}
