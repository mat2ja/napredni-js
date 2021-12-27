import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForm1Component } from './news-form1.component';

describe('NewsForm1Component', () => {
  let component: NewsForm1Component;
  let fixture: ComponentFixture<NewsForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
