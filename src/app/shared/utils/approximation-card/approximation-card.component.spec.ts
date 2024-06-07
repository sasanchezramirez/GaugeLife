import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproximationCardComponent } from './approximation-card.component';

describe('ApproximationCardComponent', () => {
  let component: ApproximationCardComponent;
  let fixture: ComponentFixture<ApproximationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproximationCardComponent]
    });
    fixture = TestBed.createComponent(ApproximationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
