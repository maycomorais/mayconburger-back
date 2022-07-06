import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/users.entity';
import { CreaterUserDto } from './dto/create-user.dto';
import { UptadeUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UserControllers {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo usuário',
  })
  create(@Body() dto: CreaterUserDto): Promise<User | void> {
    return this.userService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuários',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar Usuário por ID',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um Usuário',
  })
  update(@Param('id') id: string, @Body() dto: UptadeUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar Usuário',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
