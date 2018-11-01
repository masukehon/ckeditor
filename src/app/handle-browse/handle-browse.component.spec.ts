import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleBrowseComponent } from './handle-browse.component';

describe('HandleBrowseComponent', () => {
  let component: HandleBrowseComponent;
  let fixture: ComponentFixture<HandleBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
