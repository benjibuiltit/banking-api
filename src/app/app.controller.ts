import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(@Res() res) {
    return res.redirect('/docs');
  }

  @Get('health')
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
