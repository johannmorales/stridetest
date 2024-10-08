import {Entity, PrimaryColumn, Column, BaseEntity} from 'typeorm';
import {GlobalSecondaryIndex} from 'typeorm-dynamodb';

@Entity({name: 'task'})
export class Task extends BaseEntity {
  @PrimaryColumn({name: 'id', type: 'varchar'})
  id?: string;

  @Column({name: 'description', type: 'varchar'})
  description?: string;

  @Column({name: 'createdAt', type: 'varchar'})
  createdAt?: string;
}
