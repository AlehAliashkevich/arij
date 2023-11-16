import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorOutputComponent } from './calculator-output.component';

describe('CalculatorOutputComponent', () => {
  let component: CalculatorOutputComponent;
  let fixture: ComponentFixture<CalculatorOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
