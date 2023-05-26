import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [PersonModule, LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
