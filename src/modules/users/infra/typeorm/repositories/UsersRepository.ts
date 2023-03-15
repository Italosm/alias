import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { IPaginateUser } from '@modules/users/domain/models/IPaginateUser';
import { ICreateUser } from '@modules/users/domain/models/ICreateUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import User from '../entities/User';
import { SearchParams } from '@modules/users/domain/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }
  public async findByUserName(userName: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({
      userName,
    });
    return user;
  }
  async findAll({ page, skip, take }: SearchParams): Promise<IPaginateUser> {
    const [users, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    };

    return result;
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({
      userId,
    });
    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({
      email,
    });
    return user;
  }
  async create({
    firstName,
    lastName,
    userName,
    email,
    passwordHash,
    role,
  }: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({
      firstName,
      lastName,
      userName,
      email,
      passwordHash,
      role,
    });
    await this.ormRepository.save(user);
    return user;
  }
  async save(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }
}

export default UsersRepository;
