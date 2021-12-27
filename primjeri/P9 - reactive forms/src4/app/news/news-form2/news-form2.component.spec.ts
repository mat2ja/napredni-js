import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForm2Component } from './news-form2.component';

describe('NewsForm2Component', () => {
  let component: NewsForm2Component;
  let fixture: ComponentFixture<NewsForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
