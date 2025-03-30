import { Component, Input, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/products.model';
@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white rounded-xl p-6 flex flex-col gap-2 items-center">
      <img [src]="item().image" class="w-auto h-[180px] object-contain" />
      <span class="text-2xl font-semibold">{{ item().title }}</span>
      <div>
        <span class="text-lg">{{ item().price }}</span>
      </div>
      <app-button
        label="Remove ⊗"
        class="text-red-500 outline-red-400 bg-red-50"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}
