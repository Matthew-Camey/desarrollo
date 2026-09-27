import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn('increment') // ID autoincrementable 1, 2, 3...
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('int')
  semestre: number;

  @Column({ nullable: true }) // Puede que no tenga prerrequisitos
  prerrequisitos: string;

  @Column('int')
  creditos: number;
}