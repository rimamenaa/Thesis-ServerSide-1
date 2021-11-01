import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Bicycle {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  category: string;
  @Column()
  description: string;
  @Column()
  photo: string;
}
