import { Component, OnInit } from '@angular/core';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';

@Component({
  selector: 'app-buscar-tipo-vehiculo',
  templateUrl: './buscar-tipo-vehiculo.component.html',
  styleUrls: ['./buscar-tipo-vehiculo.component.css']
})
export class BuscarTipoVehiculoComponent implements OnInit {

  listadoTipoVehiculos: ModeloTipoVehiculo[]=[];
  constructor(private tipoVehiculoServicio:TipoVehiculoService) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos()
  }
  ObtenerListadoVehiculos(){
    this.tipoVehiculoServicio.ObtenerRegistrosTipoVehiculo().subscribe((datos:ModeloTipoVehiculo[])=>{
      this.listadoTipoVehiculos = datos;
    })
  }

}
