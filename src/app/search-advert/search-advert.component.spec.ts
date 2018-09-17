import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertComponent } from './search-advert.component';

describe('SearchAdvertComponent', () => {
  let component: SearchAdvertComponent;
  let fixture: ComponentFixture<SearchAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
