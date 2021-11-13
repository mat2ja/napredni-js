import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna7Component } from './testna7.component';

describe('Testna7Component', () => {
  let component: Testna7Component;
  let fixture: ComponentFixture<Testna7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
