import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcollapserComponent } from './appcollapser.component';

describe('AppcollapserComponent', () => {
  let component: AppcollapserComponent;
  let fixture: ComponentFixture<AppcollapserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcollapserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcollapserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
