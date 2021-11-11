import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna2Component } from './testna2.component';

describe('Testna2Component', () => {
  let component: Testna2Component;
  let fixture: ComponentFixture<Testna2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
