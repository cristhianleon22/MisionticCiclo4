import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipovehiculoComponent } from './eliminar-tipovehiculo.component';

describe('EliminarTipovehiculoComponent', () => {
  let component: EliminarTipovehiculoComponent;
  let fixture: ComponentFixture<EliminarTipovehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipovehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
