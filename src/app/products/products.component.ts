import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService, IProduct } from '../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.productService.products$;
  delete = false;
  productToBeDeleted;
  productOpen;
  selectedProduct: IProduct;


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  trackById(index, item) {
    return item.id;
  }

  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    // We need to implement this method removeProduct in our ProductsService
    this.productService.removeProduct(this.productToBeDeleted);
  }


  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        // Edit Flow
        this.productService.editProduct(this.selectedProduct.id, event.product);
      } else {
        // Save New
        this.productService.addProduct(event.product);
      }
    };
    this.productOpen = false;
  }

}
