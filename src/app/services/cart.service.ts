import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Apple iPhone 14',
      image:
        'https://images.squarespace-cdn.com/content/v1/589356e4e4fcb5bf186265fb/1664317577512-RRKWUV69JB206SOBLW24/iPhone-14-Front-Back-Bolt-Mobile-Midnight.png?format=1000w',
      price: 999.99,
      stock: 50,
    },
    {
      id: 2,
      title: 'Samsung Galaxy S23',
      image:
        'https://www.samsungmobilepress.com/file/2DC7AE4D8910D1E4A4F146FEB3AF94EDE15B1487D12A2B9F4F363460D081F0CE6F8DEC51C79FAE21168EEF8DF6EB02B7EC240940063926F81BD7827C70BA0BAFAD9594E8E3D044E933EBAE9E896C939989A34B7E401507AA5CDA46BE13390769BD74292F0B2067541BC42948D159183DF75C0FCA5355D8070B528FA7F7E7AFB7',
      price: 1099.99,
      stock: 0,
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
