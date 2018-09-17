import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertSuccessComponent } from './advert-success.component';

describe('AdvertSuccessComponent', () => {
  let component: AdvertSuccessComponent;
  let fixture: ComponentFixture<AdvertSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
