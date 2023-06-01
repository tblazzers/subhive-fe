import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIntegrationComponent } from './key-integration.component';

describe('KeyIntegrationComponent', () => {
  let component: KeyIntegrationComponent;
  let fixture: ComponentFixture<KeyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
