import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrySettingsComponent } from './retry-settings.component';

describe('RetrySettingsComponent', () => {
  let component: RetrySettingsComponent;
  let fixture: ComponentFixture<RetrySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrySettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
