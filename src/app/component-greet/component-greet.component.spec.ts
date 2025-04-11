import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGreetComponent } from './component-greet.component';

describe('ComponentGreetComponent', () => {
  let component: ComponentGreetComponent;
  let fixture: ComponentFixture<ComponentGreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGreetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
