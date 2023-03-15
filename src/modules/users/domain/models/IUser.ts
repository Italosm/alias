import { UserRole } from '@modules/users/infra/typeorm/entities/User';

export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  isActive: boolean;
  password: string;
  role: UserRole[];
  createdAt: Date;
  updatedAt: Date;
}
