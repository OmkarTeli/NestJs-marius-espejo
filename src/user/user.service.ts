import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 0, name: 'omkar' },
    { id: 1, name: 'vikrant' },
    { id: 2, name: 'kaushal' },
    { id: 2, name: 'kaushal' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
  }
  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...CreateUserDto,
    };

    this.users.push(newUser);
    console.log(this.users);
    return newUser;
  }
}
