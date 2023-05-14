import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContactPage } from './form-contact.page';

describe('FormContactPage', () => {
  let component: FormContactPage;
  let fixture: ComponentFixture<FormContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
