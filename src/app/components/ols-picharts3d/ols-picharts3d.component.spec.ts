import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlsPicharts3dComponent } from './ols-picharts3d.component';

describe('OlsPicharts3dComponent', () => {
  let component: OlsPicharts3dComponent;
  let fixture: ComponentFixture<OlsPicharts3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlsPicharts3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlsPicharts3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
