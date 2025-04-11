import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeinnerComponent } from './cubeinner.component';

describe('CubeinnerComponent', () => {
  let component: CubeinnerComponent;
  let fixture: ComponentFixture<CubeinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
