import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdministradoresComponent } from './listar-administradores.component';

describe('ListarAdministradoresComponent', () => {
  let component: ListarAdministradoresComponent;
  let fixture: ComponentFixture<ListarAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAdministradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
