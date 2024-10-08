import {Entity, PrimaryColumn, Column, BaseEntity} from 'typeorm';
import {GlobalSecondaryIndex} from 'typeorm-dynamodb';

@Entity({name: 'customer'})
export class Customer extends BaseEntity {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  id?: string;

  @Column({name: 'name', type: 'varchar'})
  name?: string;

  @Column({name: 'email', type: 'varchar'})
  email?: string;

  @Column({name: 'photo', type: 'varchar'})
  photo?: string;

  @Column({name: 'createdAt', type: 'varchar'})
  createdAt!: string;
}
