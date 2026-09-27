import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true }) // El carnet no se puede repetir
  carnet: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ type: 'date' })
  fechaNacimiento: string;

  @Column()
  sexo: string;
}