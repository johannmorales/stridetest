import {Entity, PrimaryColumn, Column, BaseEntity, OneToMany} from 'typeorm';
import {GlobalSecondaryIndex} from 'typeorm-dynamodb';

@Entity({name: 'user'})
@GlobalSecondaryIndex({
  name: 'UserIndex',
  partitionKey: 'id',
  sortKey: ['id'],
})
export class User extends BaseEntity {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  id?: string;

  @Column({name: 'name', type: 'varchar'})
  name?: string;
}
