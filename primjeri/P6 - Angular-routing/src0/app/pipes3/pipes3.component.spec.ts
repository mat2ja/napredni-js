import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipes3Component } from './pipes3.component';

describe('Pipes3Component', () => {
  let component: Pipes3Component;
  let fixture: ComponentFixture<Pipes3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipes3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
