import { inject, injectable } from 'tsyringe';
import { ICreateUser } from '../domain/models/ICreateUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { IUser } from '../domain/models/IUser';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository') //TODO:
    private usersRepository: IUsersRepository,
  ) {}
  public async execute({
    firstName,
    lastName,
    userName,
    email,
    isActive,
    password,
    role,
  }: ICreateUser): Promise<IUser> {
    const emailExists = await this.usersRepository.findByEmail(email);
    const userNameExists = await this.usersRepository.findByUserName(userName);
    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    if (userNameExists) {
      throw new AppError('userName already used.');
    }

    const user = await this.usersRepository.create({
      firstName,
      lastName,
      userName,
      email,
      isActive,
      password,
      role,
    });

    return user;
  }
}

export default CreateUserService;
