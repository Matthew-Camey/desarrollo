import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs', // <-- Driver WebAssembly/JS puro (no falla en Windows)
      location: 'umg-database.sqlite', // <-- sqljs usa 'location' en lugar de 'database'
      autoSave: true, // <-- Obligatorio en sqljs para guardar los datos en el archivo
      autoLoadEntities: true,
      synchronize: true,
    }),
    EstudiantesModule,
    CursosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}