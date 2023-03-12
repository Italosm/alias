import { dataSource } from '@shared/infra/typeorm';
import User from '../entities/User';
import { Repository } from 'typeorm';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { IUser } from '@modules/users/domain/models/IUser';
import { IPaginateUser } from '@modules/users/domain/models/IPaginateUser';
import { ICreateUser } from '@modules/users/domain/models/ICreateUser';
import { IShowUser } from '@modules/users/domain/models/IShowUser';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }
  public async findByUserName(userName: string): Promise<IUser | null> {
    const user = await this.ormRepository.findOneBy({
      userName,
    });
    return user;
  }
  findAll({
    page,
    skip,
    take,
  }: {
    page: number;
    skip: number;
    take: number;
  }): Promise<IPaginateUser> {
    throw new Error('Method not implemented.');
  }

  findById(userId: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<IUser | null> {
    throw new Error('Method not implemented.');
  }
  create(data: ICreateUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  save(user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
}

export default UsersRepository;
