import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderComponent } from './admin-header.component';

describe('AdminHeaderComponent', () => {
  let component: AdminHeaderComponent;
  let fixture: ComponentFixture<AdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Switch value should be false', () => {
    expect(component.switchValue).toBe(false, 'Off at first');
    component.clickSwitch();
    setTimeout(() => {
      expect(component.switchValue).toBe(true, 'On after click');
    }, 500);
  });
});
