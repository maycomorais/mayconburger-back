import { Module } from '@nestjs/common';
import { UserControllers } from './users.controler';
import { UsersService } from './users.service';

@Module({
  controllers: [UserControllers],
  providers: [UsersService],
})
export class UserModule {}
