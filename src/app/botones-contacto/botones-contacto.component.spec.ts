import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesContactoComponent } from './botones-contacto.component';

describe('BotonesContactoComponent', () => {
  let component: BotonesContactoComponent;
  let fixture: ComponentFixture<BotonesContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
