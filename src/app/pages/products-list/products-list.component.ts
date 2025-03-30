import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div className="p-8 grid grid-cols-3 gap-2">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" /> }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([
    // {
    //   id: 1,
    //   title: 'Apple iPhone 14',
    //   image:
    //     'https://images.squarespace-cdn.com/content/v1/589356e4e4fcb5bf186265fb/1664317577512-RRKWUV69JB206SOBLW24/iPhone-14-Front-Back-Bolt-Mobile-Midnight.png?format=1000w',
    //   price: 999.99,
    //   stock: 50,
    // },
    // {
    //   id: 2,
    //   title: 'Samsung Galaxy S23',
    //   image:
    //     'https://www.samsungmobilepress.com/file/2DC7AE4D8910D1E4A4F146FEB3AF94EDE15B1487D12A2B9F4F363460D081F0CE6F8DEC51C79FAE21168EEF8DF6EB02B7EC240940063926F81BD7827C70BA0BAFAD9594E8E3D044E933EBAE9E896C939989A34B7E401507AA5CDA46BE13390769BD74292F0B2067541BC42948D159183DF75C0FCA5355D8070B528FA7F7E7AFB7',
    //   price: 1099.99,
    //   stock: 0,
    // },
    // {
    //   id: 3,
    //   title: 'Sony PlayStation 5',
    //   image: 'https://m.media-amazon.com/images/I/51nyOPcCrwL._SL1290_.jpg',
    //   price: 499.99,
    //   stock: 30,
    // },
    // {
    //   id: 4,
    //   title: 'Dell XPS 13 Laptop',
    //   image:
    //     'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3988&hei=2361&qlt=100,1&resMode=sharp2&size=3988,2361&chrss=full&imwidth=5000',
    //   price: 1299.99,
    //   stock: 40,
    // },
    // {
    //   id: 5,
    //   title: 'Canon EOS R50 Camera',
    //   image:
    //     'https://i5.walmartimages.com/seo/Canon-EOS-R50-Mirrorless-Camera-with-18-45mm-Lens-Black-5811C012_fe5b5ee4-375a-49ed-ac8a-1dda1aa5fb68.09f79cdf96d2c138f3c9d27edea58a78.jpeg',
    //   price: 899.99,
    //   stock: 20,
    // },
  ]);
}
