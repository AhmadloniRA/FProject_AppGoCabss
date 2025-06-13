import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CenceledPage } from './cenceled.page';

describe('CenceledPage', () => {
  let component: CenceledPage;
  let fixture: ComponentFixture<CenceledPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CenceledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
