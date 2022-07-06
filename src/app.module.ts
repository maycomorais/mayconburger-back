import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
