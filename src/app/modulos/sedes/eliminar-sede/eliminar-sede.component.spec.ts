import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSedeComponent } from './eliminar-sede.component';

describe('EliminarSedeComponent', () => {
  let component: EliminarSedeComponent;
  let fixture: ComponentFixture<EliminarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
