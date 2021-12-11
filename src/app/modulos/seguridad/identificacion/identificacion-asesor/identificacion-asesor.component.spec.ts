import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionAsesorComponent } from './identificacion-asesor.component';

describe('IdentificacionAsesorComponent', () => {
  let component: IdentificacionAsesorComponent;
  let fixture: ComponentFixture<IdentificacionAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
