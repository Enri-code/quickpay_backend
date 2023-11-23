import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive?: boolean;

  @Column({ default: false })
  email_verified?: boolean;

  @Column()
  password?: string;
}
