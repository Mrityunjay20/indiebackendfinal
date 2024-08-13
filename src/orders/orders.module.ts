import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerOrders } from './orders.entity';
import { OrderItem} from './orderitem.entity.js';
import { User } from 'src/user/user.entity';
import { Product } from 'src/shop/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerOrders, OrderItem,User, Product])],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports:[OrderItem]
})
export class OrdersModule {}
