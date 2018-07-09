import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppVerBarOverallComponent } from './opp-ver-bar-overall.component';

describe('OppVerBarOverallComponent', () => {
  let component: OppVerBarOverallComponent;
  let fixture: ComponentFixture<OppVerBarOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppVerBarOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppVerBarOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
