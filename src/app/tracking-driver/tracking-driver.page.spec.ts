import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackingDriverPage } from './tracking-driver.page';

describe('TrackingDriverPage', () => {
  let component: TrackingDriverPage;
  let fixture: ComponentFixture<TrackingDriverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
