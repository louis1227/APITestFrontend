import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApitestRoutingModule} from './apitest-routing.module';
import { ApitestComponent } from './apitest.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TwoProductsComponent } from './two-products/two-products.component';
import { TrueEnvironmentComponent } from './true-environment/true-environment.component';



import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    CommonModule,
    ApitestRoutingModule,
    TabsModule
  ],
  declarations: [ApitestComponent, SingleProductComponent, TwoProductsComponent, TrueEnvironmentComponent]
})
export class ApitestModule { }
