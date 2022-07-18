import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreaterUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';

@Injectable()
export class UsersService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    ddd: true,
    tellphone: true,
    postalCode: true,
    street: true,
    complement: true,
    number: true,
    district: true,
    city: true,
    state: true,
    password: true,
    isAdmin: true,
    createdAt: true,
    uptadedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreaterUserDto): Promise<User | void> {
    const hashedPassword = await bcrypt.hash(dto.password, 8);

    const data: CreaterUserDto = {
      name: dto.name,
      email: dto.email,
      ddd: dto.ddd,
      tellphone: dto.tellphone,
      postalCode: dto.postalCode,
      street: dto.street,
      complement: dto.complement,
      number: dto.number,
      district: dto.district,
      city: dto.city,
      state: dto.state,
      password: hashedPassword,
    };
    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: {
        ...this.userSelect,
        favorites: true,
      },
    });
  }

  async findById(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
      select: {
        ...this.userSelect,
        favorites: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada.`);
    }

    return user;
  }

  findOne(id: string) {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);

    return this.prisma.user
      .update({ where: { id }, data: dto, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.user.delete({
      where: { id },
      select: this.userSelect,
    });
  }
}
