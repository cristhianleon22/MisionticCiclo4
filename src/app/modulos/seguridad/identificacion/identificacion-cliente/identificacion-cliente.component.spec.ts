import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionClienteComponent } from './identificacion-cliente.component';

describe('IdentificacionClienteComponent', () => {
  let component: IdentificacionClienteComponent;
  let fixture: ComponentFixture<IdentificacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
