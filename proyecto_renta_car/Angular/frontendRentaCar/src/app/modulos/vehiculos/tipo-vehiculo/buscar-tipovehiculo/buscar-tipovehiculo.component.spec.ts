import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTipovehiculoComponent } from './buscar-tipovehiculo.component';

describe('BuscarTipovehiculoComponent', () => {
  let component: BuscarTipovehiculoComponent;
  let fixture: ComponentFixture<BuscarTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTipovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
