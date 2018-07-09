import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dailyopp3dComponent } from './dailyopp3d.component';

describe('Dailyopp3dComponent', () => {
  let component: Dailyopp3dComponent;
  let fixture: ComponentFixture<Dailyopp3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dailyopp3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dailyopp3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
