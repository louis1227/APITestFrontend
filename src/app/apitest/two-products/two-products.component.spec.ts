import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoProductsComponent } from './two-products.component';

describe('TwoProductsComponent', () => {
  let component: TwoProductsComponent;
  let fixture: ComponentFixture<TwoProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
