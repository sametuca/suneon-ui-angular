import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerButton } from './shimmer-button';

describe('ShimmerButton', () => {
  let component: ShimmerButton;
  let fixture: ComponentFixture<ShimmerButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimmerButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
