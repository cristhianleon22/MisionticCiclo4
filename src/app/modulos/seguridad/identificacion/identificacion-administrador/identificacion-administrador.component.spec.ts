import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionAdministradorComponent } from './identificacion-administrador.component';

describe('IdentificacionAdministradorComponent', () => {
  let component: IdentificacionAdministradorComponent;
  let fixture: ComponentFixture<IdentificacionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
