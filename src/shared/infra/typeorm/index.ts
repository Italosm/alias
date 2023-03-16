import { DataSource } from 'typeorm';
import { CreateUsers } from './migrations/CreateUsers';
import User from '@modules/users/infra/typeorm/entities/User';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'inbrap',
  database: 'inbrap',
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [CreateUsers],
});
