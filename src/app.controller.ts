import { Controller, Get, Render } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiExcludeEndpoint()
  @Render('index')
  render(): any {
    const message = this.appService.getHello();
    return { message };
  }
}
