import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SELLER = 'seller',
  SAC = 'sac',
  BILLING = 'billing',
  MANAGER = 'manager',
  GHOST = 'ghost',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column('boolean')
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    array: true,
    default: [UserRole.GHOST],
  })
  @Exclude()
  role: UserRole[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
