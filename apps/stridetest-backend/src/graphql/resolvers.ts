import {getRepository, Page, Pageable} from 'typeorm-dynamodb';
import {Resolvers} from './resolvers-types';
import {Customer, Deal, Task} from '../db/entities';
import {v4 as uuidv4} from 'uuid';
import {EntityTarget} from 'typeorm';
import {PageExpensive} from 'typeorm-dynamodb/dist/driver/dynamo/models/PageExpensive';

const createPaginatedResolver = <Entity>(entity: EntityTarget<Entity>) => {
  return async (
    _: {},
    params: {
      pageNumber: number;
      pageSize: number;
      lastEvaluatedKey?: string | null;
    }
  ) => {
    const page = (await getRepository(entity).findPage(
      {
        sort: 'createdAt',
        exclusiveStartKey: params.lastEvaluatedKey ?? undefined,
      },
      new Pageable(
        params.pageNumber,
        params.pageSize,
        undefined,
        params.lastEvaluatedKey ?? undefined
      )
    )) as Page<Entity>;

    return page;
  };
};

const createCountResolver = <Entity>(entity: EntityTarget<Entity>) => {
  return async () => {
    const page = (await getRepository(entity).findPageWithCountExpensive(
      {},
      new Pageable(0, 1)
    )) as PageExpensive<Entity>;

    return page.totalElements;
  };
};

export const resolvers: Resolvers = {
  Query: {
    getTasksPage: createPaginatedResolver(Task),
    getDealsPage: createPaginatedResolver(Deal),
    getDealsCount: createCountResolver(Deal),
    getCustomersPage: createPaginatedResolver(Customer),
    getCustomersCount: createCountResolver(Customer),
  },
  Mutation: {
    createTask: async (_, params, context) => {
      await getRepository(Task).put({
        id: uuidv4(),
        description: params.description,
        createdAt: new Date().toISOString(),
      });
      return true;
    },
  },
};
