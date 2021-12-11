import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoVehiculoComponent } from './crear-tipo-vehiculo.component';

describe('CrearTipoVehiculoComponent', () => {
  let component: CrearTipoVehiculoComponent;
  let fixture: ComponentFixture<CrearTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
