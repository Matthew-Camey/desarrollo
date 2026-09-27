import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  create(createCursoDto: CreateCursoDto) {
    const curso = this.cursoRepository.create(createCursoDto);
    return this.cursoRepository.save(curso);
  }

  findAll() {
    return this.cursoRepository.find();
  }

  findOne(id: number) {
    return this.cursoRepository.findOneBy({ id });
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.cursoRepository.update(id, updateCursoDto);
  }

  remove(id: number) {
    return this.cursoRepository.delete(id);
  }
}
