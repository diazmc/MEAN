import { Component } from '@angular/core';
import { ProductService } from './product.service'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    new Product(1, 'DSLR Camera', 1499.99, '../../assets/camera.jpg')
  ];

  constructor(private _productService: ProductService) { 
    this._productService.updateProducts(this.products);
    this._productService.productsObervable.subscribe( (products) => {
      this.products = products;
    })

  }

}
