import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAlertComponent } from './result-alert.component';

describe('ResultAlertComponent', () => {
  let component: ResultAlertComponent;
  let fixture: ComponentFixture<ResultAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
