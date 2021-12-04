import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCodeudorComponent } from './buscar-codeudor.component';

describe('BuscarCodeudorComponent', () => {
  let component: BuscarCodeudorComponent;
  let fixture: ComponentFixture<BuscarCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCodeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
