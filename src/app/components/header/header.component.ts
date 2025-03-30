import { Component, signal, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../componenets/primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="text-white bg-zinc-700 p-5 flex justify-between">
      <button class="font-light text-2xl cursor-pointer" routerLink="/">
        A-Store
      </button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Angular Ecommerce');
  showButtonClicked() {
    console.log('Show button clicked');
  }

  cartService = inject(CartService);
  // cart = signal('Cart');
}
