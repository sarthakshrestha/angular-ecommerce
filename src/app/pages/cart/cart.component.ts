import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 flex-col gap-4">
      <h1 class="text-6xl font-light">Cart</h1>
      <h2 class="text-2xl">Your shopping cart</h2>
      @for (item of cartService.cart(); track item.id){
      <app-cart-item [item]="item" /> }
      <app-order-summary/>
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
