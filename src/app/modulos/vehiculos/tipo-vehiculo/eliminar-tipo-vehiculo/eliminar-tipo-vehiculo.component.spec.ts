import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoVehiculoComponent } from './eliminar-tipo-vehiculo.component';

describe('EliminarTipoVehiculoComponent', () => {
  let component: EliminarTipoVehiculoComponent;
  let fixture: ComponentFixture<EliminarTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
