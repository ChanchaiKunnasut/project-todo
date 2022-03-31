import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '100', default: null })
  taskTitle: string;

  @Column()
  status: boolean;
}
