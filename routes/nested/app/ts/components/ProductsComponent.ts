/*
 * Angular
 */
import {
  NgModule,
  Component
} from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

/*
 * Components
 */
import {MainComponent} from 'components/products/MainComponent';
import {InterestComponent} from 'components/products/InterestComponent';
import {SportifyComponent} from 'components/products/SportifyComponent';
import {ByIdComponent} from 'components/products/ByIdComponent';

@Component({
  selector: 'products',
  template: `
  <h2>Products</h2>

  <div class="navLinks">
    <a [routerLink]="['./main']">Main</a> |
    <a [routerLink]="['./interest']">Interest</a> |
    <a [routerLink]="['./sportify']">Sportify</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})

export class ProductsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id:string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }
}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: ByIdComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  exports: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  imports: [ RouterModule ]
})
export class ProductsComponentModule {}

