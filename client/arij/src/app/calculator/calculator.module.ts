import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';
import { RouterModule } from '@angular/router';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorInputComponent,
    CalculatorOutputComponent,
    ErrorPageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,



  ]
})
export class CalculatorModule { }
