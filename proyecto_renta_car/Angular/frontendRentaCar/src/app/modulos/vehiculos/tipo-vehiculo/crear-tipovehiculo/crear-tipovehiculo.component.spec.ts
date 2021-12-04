import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipovehiculoComponent } from './crear-tipovehiculo.component';

describe('CrearTipovehiculoComponent', () => {
  let component: CrearTipovehiculoComponent;
  let fixture: ComponentFixture<CrearTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
