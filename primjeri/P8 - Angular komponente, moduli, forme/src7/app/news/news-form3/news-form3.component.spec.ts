import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForm3Component } from './news-form3.component';

describe('NewsForm3Component', () => {
  let component: NewsForm3Component;
  let fixture: ComponentFixture<NewsForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsForm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
