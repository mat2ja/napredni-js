import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecaComponent } from './treca.component';

describe('TrecaComponent', () => {
  let component: TrecaComponent;
  let fixture: ComponentFixture<TrecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
