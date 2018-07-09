import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Totaloppallchannel3dComponent } from './totaloppallchannel3d.component';

describe('Totaloppallchannel3dComponent', () => {
  let component: Totaloppallchannel3dComponent;
  let fixture: ComponentFixture<Totaloppallchannel3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Totaloppallchannel3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Totaloppallchannel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
