import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorInputComponent,
    CalculatorOutputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
