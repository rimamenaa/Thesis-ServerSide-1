import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Bicycle {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  name: string;
  @Column()
  station: string;
  @Column()
  description: string;
}
