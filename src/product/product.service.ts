import { Injectable, Param } from '@nestjs/common';

interface IProduct {
  id: number;
  name: string;
}
@Injectable()
export class ProductService {
  private products: IProduct[] = [
    { id: 1, name: 'iPhone 15' },
    { id: 2, name: 'iPhone 15 Plus' },
    { id: 3, name: 'iPhone 15 Pro' },
    { id: 4, name: 'iPhone 15 Pro MAx' },
  ];

  async getProducts() {
    return {
      success: true,
      message: 'Products Fetched Successfully',
      products: this.products,
    };
  }

  async getProductById(id: number) {
    const product = this.products.find((product) => product.id == id);
    console.log(product);
    console.log(this.products);
    return {
      success: true,
      message: 'Product  Fetched Successfully',
      product: product,
    };
  }
}
