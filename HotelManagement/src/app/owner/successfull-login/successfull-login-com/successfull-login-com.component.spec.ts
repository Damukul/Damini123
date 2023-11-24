import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullLoginComComponent } from './successfull-login-com.component';

describe('SuccessfullLoginComComponent', () => {
  let component: SuccessfullLoginComComponent;
  let fixture: ComponentFixture<SuccessfullLoginComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfullLoginComComponent]
    });
    fixture = TestBed.createComponent(SuccessfullLoginComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
