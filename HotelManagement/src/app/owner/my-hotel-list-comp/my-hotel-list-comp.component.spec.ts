import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotelListCompComponent } from './my-hotel-list-comp.component';

describe('MyHotelListCompComponent', () => {
  let component: MyHotelListCompComponent;
  let fixture: ComponentFixture<MyHotelListCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHotelListCompComponent]
    });
    fixture = TestBed.createComponent(MyHotelListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
