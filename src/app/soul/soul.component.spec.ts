import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulComponent } from './soul.component';

describe('SoulComponent', () => {
  let component: SoulComponent;
  let fixture: ComponentFixture<SoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
