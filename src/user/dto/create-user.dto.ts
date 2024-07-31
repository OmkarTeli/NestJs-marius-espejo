import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty() // swagger property
  name: string;
}
