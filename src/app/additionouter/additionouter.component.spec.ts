import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionouterComponent } from './additionouter.component';

describe('AdditionouterComponent', () => {
  let component: AdditionouterComponent;
  let fixture: ComponentFixture<AdditionouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
