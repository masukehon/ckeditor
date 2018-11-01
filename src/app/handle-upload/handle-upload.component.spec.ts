import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleUploadComponent } from './handle-upload.component';

describe('HandleUploadComponent', () => {
  let component: HandleUploadComponent;
  let fixture: ComponentFixture<HandleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
