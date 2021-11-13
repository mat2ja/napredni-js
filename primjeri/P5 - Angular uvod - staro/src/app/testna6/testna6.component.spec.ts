import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna6Component } from './testna6.component';

describe('Testna6Component', () => {
  let component: Testna6Component;
  let fixture: ComponentFixture<Testna6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
