import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionineerComponent } from './additionineer.component';

describe('AdditionineerComponent', () => {
  let component: AdditionineerComponent;
  let fixture: ComponentFixture<AdditionineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
