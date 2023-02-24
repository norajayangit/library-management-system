import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLibrarianComponent } from './signup-librarian.component';

describe('SignupLibrarianComponent', () => {
  let component: SignupLibrarianComponent;
  let fixture: ComponentFixture<SignupLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupLibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
