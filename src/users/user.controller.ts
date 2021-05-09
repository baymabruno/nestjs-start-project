import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from './user.schema';
import { UsersService } from './users.service';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roles: [string];
}

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('user')
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: '', type: User })
  async login(@Body() user: UserDto): Promise<User> {
    console.log(user);
    return;
  }
}
