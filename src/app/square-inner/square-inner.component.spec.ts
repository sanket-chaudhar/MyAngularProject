import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareInnerComponent } from './square-inner.component';

describe('SquareInnerComponent', () => {
  let component: SquareInnerComponent;
  let fixture: ComponentFixture<SquareInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
