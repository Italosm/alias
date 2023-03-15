import { ICreateUser } from '../domain/models/ICreateUser';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { UserRole } from '../infra/typeorm/entities/User';

export default class CreateUserService {
  ghost = UserRole.GHOST;
  public async execute({
    firstName,
    lastName,
    userName,
    email,
    passwordHash,
    role = [this.ghost],
  }: ICreateUser): Promise<IUser> {}
}
