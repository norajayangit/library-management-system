import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktakenComponent } from './booktaken.component';

describe('BooktakenComponent', () => {
  let component: BooktakenComponent;
  let fixture: ComponentFixture<BooktakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktakenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
