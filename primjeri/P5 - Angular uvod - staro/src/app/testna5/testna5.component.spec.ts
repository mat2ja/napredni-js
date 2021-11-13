import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testna5Component } from './testna5.component';

describe('Testna5Component', () => {
  let component: Testna5Component;
  let fixture: ComponentFixture<Testna5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testna5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testna5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
