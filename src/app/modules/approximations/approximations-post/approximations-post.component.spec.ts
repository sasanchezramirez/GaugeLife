import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproximationsPostComponent } from './approximations-post.component';

describe('ApproximationsPostComponent', () => {
  let component: ApproximationsPostComponent;
  let fixture: ComponentFixture<ApproximationsPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproximationsPostComponent]
    });
    fixture = TestBed.createComponent(ApproximationsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
