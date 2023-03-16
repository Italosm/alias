import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

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
      userRole: Joi.array(),
    },
  }),
  usersController.create,
);

export default usersRouter;
