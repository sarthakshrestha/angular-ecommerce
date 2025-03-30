import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h1 class="text-xl">Order Summary</h1>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg">Total: </span>
          <span></span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
}
