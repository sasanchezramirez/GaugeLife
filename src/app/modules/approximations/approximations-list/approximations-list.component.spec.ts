import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproximationsListComponent } from './approximations-list.component';

describe('ApproximationsListComponent', () => {
  let component: ApproximationsListComponent;
  let fixture: ComponentFixture<ApproximationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproximationsListComponent]
    });
    fixture = TestBed.createComponent(ApproximationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
