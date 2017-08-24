import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObervable.subscribe( (products) => {
      this.products = products;
    })
  }
  

  ngOnInit() {
    this.newProduct = new Product();
  }

  createProduct(){
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/products'])
  }

}
