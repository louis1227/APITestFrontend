import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApitestComponent} from './apitest.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {TwoProductsComponent} from './two-products/two-products.component';
import {TrueEnvironmentComponent} from './true-environment/true-environment.component';


const routes: Routes = [
  {
    path: '',
    component: ApitestComponent,
    data: {
      title: 'APITest'
    },
    children: [
      {
        path: 'single',
        component: SingleProductComponent,
        data: {
          title: '单产品接口变更测试'
        }
      },
      {
        path: 'two',
        component: TwoProductsComponent,
        data: {
          title: '产品间接口兼容测试'
        }
      },
      {
        path: 'true',
        component: TrueEnvironmentComponent,
        data: {
          title: '真实环境接口变更测试'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApitestRoutingModule {}
