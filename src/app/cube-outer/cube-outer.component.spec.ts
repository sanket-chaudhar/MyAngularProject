import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeOuterComponent } from './cube-outer.component';

describe('CubeOuterComponent', () => {
  let component: CubeOuterComponent;
  let fixture: ComponentFixture<CubeOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeOuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
