import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolicitudComponent } from './admin-solicitud.component';

describe('AdminSolicitudComponent', () => {
  let component: AdminSolicitudComponent;
  let fixture: ComponentFixture<AdminSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
