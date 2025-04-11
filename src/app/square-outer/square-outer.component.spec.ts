import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareOuterComponent } from './square-outer.component';

describe('SquareOuterComponent', () => {
  let component: SquareOuterComponent;
  let fixture: ComponentFixture<SquareOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareOuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
