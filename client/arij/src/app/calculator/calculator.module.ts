import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';
import { RouterModule, Routes } from '@angular/router'; // +

// ++++
const appRoutes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'input', component: CalculatorInputComponent },
  { path: 'output', component: CalculatorOutputComponent },
]
@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorInputComponent,
    CalculatorOutputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes) // +
  ]
})
export class CalculatorModule { }
