import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaptonUi } from './clapton-ui';

describe('ClaptonUi', () => {
  let component: ClaptonUi;
  let fixture: ComponentFixture<ClaptonUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaptonUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaptonUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
