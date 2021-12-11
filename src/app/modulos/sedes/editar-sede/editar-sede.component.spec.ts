import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSedeComponent } from './editar-sede.component';

describe('EditarSedeComponent', () => {
  let component: EditarSedeComponent;
  let fixture: ComponentFixture<EditarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
