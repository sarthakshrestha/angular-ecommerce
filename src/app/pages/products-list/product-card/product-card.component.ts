import { Component, input, inject } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../componenets/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col mx-auto items-start">
        <span class="text-md font-xl">{{ product().title }}</span>
        <span class="text-md font-xl font-semibold">{{
          '$' + product().price
        }}</span>
        <app-primary-button
          label="Add to Cart"
          class="bg-green mt-4"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      <span
        class="absolute top-2 right-3 text-sm font-semibold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500 '"
      >
        @if(product().stock){
        {{ product().stock }} left } @else { Out of stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);
}
