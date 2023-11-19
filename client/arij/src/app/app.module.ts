import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalculatorModule } from './calculator/calculator.module';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    CalculatorModule,
    AppRoutingModule,
  ]
})
export class AppModule { }
