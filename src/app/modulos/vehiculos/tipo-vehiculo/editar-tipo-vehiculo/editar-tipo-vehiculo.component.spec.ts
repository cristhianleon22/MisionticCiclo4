import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoVehiculoComponent } from './editar-tipo-vehiculo.component';

describe('EditarTipoVehiculoComponent', () => {
  let component: EditarTipoVehiculoComponent;
  let fixture: ComponentFixture<EditarTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
