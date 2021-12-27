import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForm4Component } from './news-form4.component';

describe('NewsForm4Component', () => {
  let component: NewsForm4Component;
  let fixture: ComponentFixture<NewsForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsForm4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
