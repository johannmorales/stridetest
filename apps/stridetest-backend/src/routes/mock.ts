import {Router} from 'express';
import {getRepository} from 'typeorm-dynamodb';
import {Customer, Deal, Task} from '../db/entities';
import {faker} from '@faker-js/faker';
import {v4} from 'uuid';

export const mockRouter = Router();

mockRouter.get('/', async (req, res) => {
  req.logger.info('Creating mock data');
  try {
    const customers = [];
    const deals = [];
    const tasks = [];
    for (let i = 0; i < 20; i++) {
      const customer = {
        id: v4(),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
        createdAt: faker.date.past().toISOString(),
        photo: faker.image.avatar(),
      };
      await getRepository(Customer).put(customer);
      customers.push(customer.id);
      req.logger.info(`Created customer ${JSON.stringify(customer)}`);

      const task = {
        id: v4(),
        description: faker.lorem.sentence(),
        createdAt: faker.date.past().toISOString(),
      };
      await getRepository(Task).put(task);
      tasks.push(task.id);
      req.logger.info(`Created task ${JSON.stringify(task)}`);

      const deal = {
        id: v4(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        area: faker.number.int({min: 100, max: 900, multipleOf: 100}),
        price: faker.number.int({min: 1000, max: 9000, multipleOf: 1000}),
        people: 0,
        date: faker.date.past().toISOString(),
        status: faker.helpers.arrayElement(['In Progress', 'Closed']),
        createdAt: new Date().toISOString(),
      };
      await getRepository(Deal).put(deal);
      deals.push(deal.id);

      req.logger.info(`Created deal ${JSON.stringify(deal)}`);
    }
    res.status(200).json({customers, tasks, deals});
  } catch (error) {
    console.error(error);
    res.status(200).json({});
  }
});
