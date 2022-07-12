import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [UserModule, ProductsModule, TablesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
