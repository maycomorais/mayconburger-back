import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';

@UseGuards(AuthGuard())
@ApiTags('favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoritesService.create(dto);
  }

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFavoriteDto) {
    return this.favoritesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(id);
  }
}
