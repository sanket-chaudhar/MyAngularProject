import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneerComponent } from './ineer.component';

describe('IneerComponent', () => {
  let component: IneerComponent;
  let fixture: ComponentFixture<IneerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IneerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
