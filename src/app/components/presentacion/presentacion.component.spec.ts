import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionComponent } from './presentacion.component';

describe('PresentacionComponent', () => {
  let component: PresentacionComponent;
  let fixture: ComponentFixture<PresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionComponent ]
    declare var particlesJS: any;})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
