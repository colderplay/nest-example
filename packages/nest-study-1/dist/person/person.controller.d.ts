/// <reference types="multer" />
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { LessonService } from 'src/lesson/lesson.service';
export declare class PersonController {
    private readonly personService;
    private lessonService;
    constructor(personService: PersonService, lessonService: LessonService);
    body2(createPersonDto: CreatePersonDto, files: Array<Express.Multer.File>): string;
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    query(name: string, age: number): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
