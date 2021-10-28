import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
