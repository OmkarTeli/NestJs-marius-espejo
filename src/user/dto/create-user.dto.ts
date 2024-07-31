import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty() // swagger property
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;
}
