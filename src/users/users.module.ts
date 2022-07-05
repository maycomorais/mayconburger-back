import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserControllers } from './users.controler';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserControllers],
  providers: [UsersService],
})
export class UserModule {}
