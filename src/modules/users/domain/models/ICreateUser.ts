import { UserRole } from '@modules/users/infra/typeorm/entities/User';

export interface ICreateUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  passwordHash: string;
  role: UserRole[];
}
