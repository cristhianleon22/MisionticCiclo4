import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCartaLaboralComponent } from './upload-carta-laboral.component';

describe('UploadCartaLaboralComponent', () => {
  let component: UploadCartaLaboralComponent;
  let fixture: ComponentFixture<UploadCartaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCartaLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCartaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
