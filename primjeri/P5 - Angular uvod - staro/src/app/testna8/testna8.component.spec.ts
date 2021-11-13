import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna8Component } from './testna8.component';

describe('Testna8Component', () => {
  let component: Testna8Component;
  let fixture: ComponentFixture<Testna8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
