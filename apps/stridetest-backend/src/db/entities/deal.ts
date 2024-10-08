import {Entity, PrimaryColumn, Column, BaseEntity, ManyToOne} from 'typeorm';
import {GlobalSecondaryIndex} from 'typeorm-dynamodb';

@Entity({name: 'deal'})
@GlobalSecondaryIndex({
  name: 'DealIndex',
  partitionKey: 'id',
  sortKey: ['id', 'createdAt'],
})
export class Deal extends BaseEntity {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  id!: string;

  @Column({name: 'address', type: 'varchar'})
  address?: string;

  @Column({name: 'city', type: 'varchar'})
  city?: string;

  @Column({name: 'state', type: 'varchar'})
  state?: string;

  @Column({name: 'zipCode', type: 'varchar'})
  zipCode?: string;

  @Column({name: 'area', type: 'number'})
  area?: number;

  @Column({name: 'people', type: 'number'})
  people?: number;

  @Column({name: 'date', type: 'varchar'})
  date?: string;

  @Column({name: 'price', type: 'number'})
  price?: number;

  @Column({name: 'status', type: 'varchar'})
  status?: string;

  @Column({name: 'createdAt', type: 'varchar'})
  createdAt?: string;
}
