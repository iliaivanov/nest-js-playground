import { Controller, Get, Post, Param, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('prefix')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

}
