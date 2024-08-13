import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CustomerOrders } from './Order.entity';

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CustomerOrders, (order:CustomerOrders) => order.items)
    order: CustomerOrders;

    @Column()
    productId: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    quantity: number;

    @Column('decimal', { precision: 10, scale: 2 })
    totalPrice: number;

    @Column({default:""})
    imageUrl: string;
}
