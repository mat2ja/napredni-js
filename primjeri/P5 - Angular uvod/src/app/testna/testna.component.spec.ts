import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnaComponent } from './testna.component';

describe('TestnaComponent', () => {
  let component: TestnaComponent;
  let fixture: ComponentFixture<TestnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
