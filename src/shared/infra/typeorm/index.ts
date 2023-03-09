import { DataSource } from 'typeorm';
import { CreateUsers1678152642252 as CreateUsers } from './migrations/1678152642252-CreateUsers';
import User from '@modules/users/infra/typeorm/entities/User';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'inbrap',
  database: 'inbrap',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [CreateUsers],
});
