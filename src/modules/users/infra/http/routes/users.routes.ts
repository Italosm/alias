import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';
import { UserRole } from '../../typeorm/entities/User';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      userName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isActive: Joi.boolean().default(true),
      roles: Joi.array<UserRole>().default([UserRole.GHOST]),
    },
  }),
  usersController.create,
);

export default usersRouter;
