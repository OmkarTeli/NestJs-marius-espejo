import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

interface IProduct {
  id: number;
  name: string;
}
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  //   @Get()
  //   getProducts(): any {
  //     return [{ id: 0 }];
  //   }
  //   @Get(':id')
  //   getProductById(@Param('id') id: string): { id: number } {
  //     return {
  //       id: Number(id),
  //     };
  //   }

  //GET ALL PRODUCTS
  @Get()
  getProducts(): any {
    return this.productService.getProducts();
  }

  //GET PRODUCT BY ID
  @Get(':id')
  getProductById(@Param('id') id: number): any {
    return this.productService.getProductById(id);
  }
}
