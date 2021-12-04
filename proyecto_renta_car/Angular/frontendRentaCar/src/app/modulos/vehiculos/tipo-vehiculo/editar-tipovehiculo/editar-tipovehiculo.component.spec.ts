import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipovehiculoComponent } from './editar-tipovehiculo.component';

describe('EditarTipovehiculoComponent', () => {
  let component: EditarTipovehiculoComponent;
  let fixture: ComponentFixture<EditarTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
