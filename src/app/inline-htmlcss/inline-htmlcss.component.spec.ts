import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineHTMLCSSComponent } from './inline-htmlcss.component';

describe('InlineHTMLCSSComponent', () => {
  let component: InlineHTMLCSSComponent;
  let fixture: ComponentFixture<InlineHTMLCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineHTMLCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineHTMLCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
