import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { MisionComponent } from './plantilla/mision/mision.component';
import { VisionComponent } from './plantilla/vision/vision.component';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http';
import { UploadCartaLaboralComponent } from './plantilla/upload-carta-laboral/upload-carta-laboral.component';
import { CotizacionComponent } from './plantilla/cotizacion/cotizacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MirarVehiculoComponent } from './plantilla/mirar-vehiculo/mirar-vehiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    MisionComponent,
    VisionComponent,
    ContactoComponent,
    UploadCartaLaboralComponent,
    CotizacionComponent,
    MirarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
