import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna3Component } from './testna3.component';

describe('Testna3Component', () => {
  let component: Testna3Component;
  let fixture: ComponentFixture<Testna3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
