import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStudyMaterialComponent } from './upload-study-material.component';

describe('UploadStudyMaterialComponent', () => {
  let component: UploadStudyMaterialComponent;
  let fixture: ComponentFixture<UploadStudyMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStudyMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
