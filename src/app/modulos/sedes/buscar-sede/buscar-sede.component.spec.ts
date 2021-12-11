import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSedeComponent } from './buscar-sede.component';

describe('BuscarSedeComponent', () => {
  let component: BuscarSedeComponent;
  let fixture: ComponentFixture<BuscarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
