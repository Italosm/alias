import { DataSource } from 'typeorm';
import { CreateUsers1678152642252 } from './migrations/1678152642252-CreateUsers';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'inbrap',
  database: 'inbrap',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [CreateUsers1678152642252],
});
