import { DataSource } from 'typeorm';

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
  migrations: [],
});
