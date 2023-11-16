import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
		path: '',
		loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule),
		canActivate: [],
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
