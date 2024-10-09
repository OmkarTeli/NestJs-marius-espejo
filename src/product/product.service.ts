import { Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'iPhone 15' },
    { id: 2, name: 'iPhone 15 Plus' },
    { id: 3, name: 'iPhone 15 Pro' },
    { id: 4, name: 'iPhone 15 Pro MAx' },
  ];

  async getProducts(): Promise<{
    success: boolean;
    message: string;
    products: Product[];
  }> {
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

  async createProduct(createProductDto: CreateProductDto) {
    const newProduct = { id: Date.now(), ...createProductDto };
    this.products.push(newProduct);
    return {
      success: true,
      message: 'Product Created Successfully',
      products: this.products,
    };
  }
}
