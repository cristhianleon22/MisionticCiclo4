import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirarVehiculoComponent } from './mirar-vehiculo.component';

describe('MirarVehiculoComponent', () => {
  let component: MirarVehiculoComponent;
  let fixture: ComponentFixture<MirarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirarVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
