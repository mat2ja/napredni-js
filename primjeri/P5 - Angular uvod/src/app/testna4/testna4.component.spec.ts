import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna4Component } from './testna4.component';

describe('Testna4Component', () => {
  let component: Testna4Component;
  let fixture: ComponentFixture<Testna4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
