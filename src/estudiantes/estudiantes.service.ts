import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}

  create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  findAll() {
    return this.estudianteRepository.find();
  }

  findOne(id: string) {
    return this.estudianteRepository.findOneBy({ id });
  }

  update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteRepository.update(id, updateEstudianteDto);
  }

  remove(id: string) {
    return this.estudianteRepository.delete(id); // Eliminación física directa
  }
}