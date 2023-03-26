import User from '@modules/users/infra/typeorm/entities/User';

export interface ISession {
  user: User;
  token: string;
}
