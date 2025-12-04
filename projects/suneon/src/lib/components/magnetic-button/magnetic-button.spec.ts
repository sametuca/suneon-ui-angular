import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticButton } from './magnetic-button';

describe('MagneticButton', () => {
  let component: MagneticButton;
  let fixture: ComponentFixture<MagneticButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagneticButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagneticButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
