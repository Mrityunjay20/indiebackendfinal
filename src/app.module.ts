import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/entities/product.entity';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Cart } from './cart/cart.entity';
import { CartItem } from './cart/cart-Item.entity';
import { OrdersModule } from './orders/orders.module';
import { CustomerOrders } from './orders/orders.entity';
import { OrderItem } from './orders/orderitem.entity';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ShopModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mrityunjaymanas',
    database: 'testdb',
    entities: [Product, User, Cart, CartItem, CustomerOrders, OrderItem],
    synchronize: true  //only to use in development enviornment NEVER IN production
  }), CartModule, UserModule, AdminModule, OrdersModule],
})
export class AppModule {}
