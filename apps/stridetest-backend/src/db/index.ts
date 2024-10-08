import {datasourceInitializer} from 'typeorm-dynamodb';
import {Customer, Deal, Task, User} from './entities';

export const db = datasourceInitializer({
  entities: [Customer, Task, Deal],
  synchronize: true,
});
