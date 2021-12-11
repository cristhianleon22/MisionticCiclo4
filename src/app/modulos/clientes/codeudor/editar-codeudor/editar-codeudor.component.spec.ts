import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCodeudorComponent } from './editar-codeudor.component';

describe('EditarCodeudorComponent', () => {
  let component: EditarCodeudorComponent;
  let fixture: ComponentFixture<EditarCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCodeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
