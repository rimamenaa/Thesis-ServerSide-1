import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
