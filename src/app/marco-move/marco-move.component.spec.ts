import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoMoveComponent } from './marco-move.component';

describe('MarcoMoveComponent', () => {
  let component: MarcoMoveComponent;
  let fixture: ComponentFixture<MarcoMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
