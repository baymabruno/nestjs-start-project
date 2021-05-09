import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { rolesConstants } from 'src/users/constants/user.constants';
import { AuthorizationService } from './authorization.service';
import { Login } from './dto/login.dto';
import { Authorize } from './guards/authorize.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

/** @todo criar objeto */
export type Req = any;

@ApiTags('Authorization')
@Controller('api/auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('/login')
  @ApiBody({ type: Login })
  @ApiResponse({ status: 200, description: '', type: String })
  async login(@Body() user: Login): Promise<string> {
    return this.authorizationService.login(user);
  }

  @Get('profile')
  @Authorize(rolesConstants.admin)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getProfile(@Request() req: Req): any {
    return req.user;
  }
}
