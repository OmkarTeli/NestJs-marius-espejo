import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get('get-users')
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUsersById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: User })
  @Post('create-user')
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
