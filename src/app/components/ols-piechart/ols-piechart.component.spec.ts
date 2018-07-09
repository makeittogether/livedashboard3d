import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlsPiechartComponent } from './ols-piechart.component';

describe('OlsPiechartComponent', () => {
  let component: OlsPiechartComponent;
  let fixture: ComponentFixture<OlsPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlsPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlsPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
