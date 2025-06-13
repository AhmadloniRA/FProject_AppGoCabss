import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalUserPage } from './personal-user.page';

describe('PersonalUserPage', () => {
  let component: PersonalUserPage;
  let fixture: ComponentFixture<PersonalUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
