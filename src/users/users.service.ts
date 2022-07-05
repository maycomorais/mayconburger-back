import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreaterUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UptadeUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(dto: CreaterUserDto): Promise<User> {
    const hashedPassword = bcrypt.hashSync(dto.password, 8);

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
    return this.prisma.user.create({ data });
  }

  update(id: string, dto: UptadeUserDto) {
    return this.prisma.user.update({ where: { id }, data: dto });
  }

  delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
