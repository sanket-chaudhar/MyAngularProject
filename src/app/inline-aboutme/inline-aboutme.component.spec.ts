import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineAboutmeComponent } from './inline-aboutme.component';

describe('InlineAboutmeComponent', () => {
  let component: InlineAboutmeComponent;
  let fixture: ComponentFixture<InlineAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineAboutmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
