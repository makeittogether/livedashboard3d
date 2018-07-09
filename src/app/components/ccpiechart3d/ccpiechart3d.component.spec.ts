import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccpiechart3dComponent } from './ccpiechart3d.component';

describe('Ccpiechart3dComponent', () => {
  let component: Ccpiechart3dComponent;
  let fixture: ComponentFixture<Ccpiechart3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ccpiechart3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccpiechart3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
