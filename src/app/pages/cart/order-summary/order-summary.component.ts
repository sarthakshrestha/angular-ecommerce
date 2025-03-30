import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../componenets/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h1 class="text-xl">Order Summary</h1>
      <div class="flex flex-col gap-4 mb-4">
        <div class="flex gap-4">
          <span class="text-lg">Total: </span>
          <span class="font-bold">{{ '$' + total() }}</span>
        </div>
      </div>
      <app-primary-button label="Proceed to checkout" />
    </div>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}
