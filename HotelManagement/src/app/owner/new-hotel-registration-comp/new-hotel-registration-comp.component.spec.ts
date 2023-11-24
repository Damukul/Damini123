import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelRegistrationCompComponent } from './new-hotel-registration-comp.component';

describe('NewHotelRegistrationCompComponent', () => {
  let component: NewHotelRegistrationCompComponent;
  let fixture: ComponentFixture<NewHotelRegistrationCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHotelRegistrationCompComponent]
    });
    fixture = TestBed.createComponent(NewHotelRegistrationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
