import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  name: string;
  @Column()
  location: string;
  @Column()
  numberOfBicycles: Number;
}
