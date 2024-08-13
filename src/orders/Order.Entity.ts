import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './OrderItem.entity';

@Entity()
export class CustomerOrders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firebaseUid: string;

    @Column('json')
    orderInfo: Record<string, any>;

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items: OrderItem[];

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column({ nullable: true })
    razorpayOrderId: string | null;

    @Column({default:"failed", nullable:true})
    paymentStatus:string;

}
