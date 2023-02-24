import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianmenuComponent } from './librarianmenu.component';

describe('LibrarianmenuComponent', () => {
  let component: LibrarianmenuComponent;
  let fixture: ComponentFixture<LibrarianmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarianmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
