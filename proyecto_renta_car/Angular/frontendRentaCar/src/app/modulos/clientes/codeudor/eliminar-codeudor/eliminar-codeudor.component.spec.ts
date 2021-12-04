import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCodeudorComponent } from './eliminar-codeudor.component';

describe('EliminarCodeudorComponent', () => {
  let component: EliminarCodeudorComponent;
  let fixture: ComponentFixture<EliminarCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCodeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
