import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoVehiculoComponent } from './admin-tipo-vehiculo.component';

describe('AdminTipoVehiculoComponent', () => {
  let component: AdminTipoVehiculoComponent;
  let fixture: ComponentFixture<AdminTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
