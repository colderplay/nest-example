import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { LessonModule } from 'src/lesson/lesson.module';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [LessonModule],
})
export class PersonModule {}
