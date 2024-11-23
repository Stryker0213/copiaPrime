import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { PrecioConsumidorComponent } from './components/precio-consumidor/precio-consumidor.component';
import { PrecioPlantelComponent } from './components/precio-plantel/precio-plantel.component'; 
import { ImportsModule } from './importsNG';

@NgModule({
  declarations: [AppComponent, PrecioConsumidorComponent, PrecioPlantelComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // Agregar HttpClientModule aquí
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
