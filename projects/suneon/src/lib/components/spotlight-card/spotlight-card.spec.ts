import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightCard } from './spotlight-card';

describe('SpotlightCard', () => {
  let component: SpotlightCard;
  let fixture: ComponentFixture<SpotlightCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotlightCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
