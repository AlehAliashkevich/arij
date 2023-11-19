import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorOutputComponent } from './calculator/calculator-output/calculator-output.component';
import { CalculatorInputComponent } from './calculator/calculator-input/calculator-input.component';
import { ErrorPageNotFoundComponent } from './calculator/error-page-not-found/error-page-not-found.component';

export const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: '**', component: ErrorPageNotFoundComponent }
];

@NgModule({
  exports: [
    RouterModule,
    CalculatorModule,
  ]
})

export class AppRoutingModule { }