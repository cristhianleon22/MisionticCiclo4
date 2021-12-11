import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTipoVehiculoComponent } from './buscar-tipo-vehiculo.component';

describe('BuscarTipoVehiculoComponent', () => {
  let component: BuscarTipoVehiculoComponent;
  let fixture: ComponentFixture<BuscarTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
