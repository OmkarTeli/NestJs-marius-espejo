import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProducts(): any {
    return [{ id: 0 }];
  }

  @Get(':id')
  getProductsById(@Param('id') id: string): any {
    return {
      id,
    };
  }
}
