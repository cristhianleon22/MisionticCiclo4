import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorHomeComponent } from './asesor-home.component';

describe('AsesorHomeComponent', () => {
  let component: AsesorHomeComponent;
  let fixture: ComponentFixture<AsesorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
