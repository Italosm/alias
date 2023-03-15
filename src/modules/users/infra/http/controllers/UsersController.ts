import CreateUserService from '@modules/users/services/CreateUserService';
import ListUserService from '@modules/users/services/ListUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const listUser = container.resolve(ListUserService);
    const users = await listUser.execute({ page, limit });
    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const showUser = container.resolve(ShowUserService);

    const user = await showUser.execute({ userId });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, userName, email, password, role } =
      request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      firstName,
      lastName,
      userName,
      email,
      password,
      role,
    });

    return response.json(user);
  }
}
