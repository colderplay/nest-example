"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const person_service_1 = require("./person.service");
const create_person_dto_1 = require("./dto/create-person.dto");
const update_person_dto_1 = require("./dto/update-person.dto");
const platform_express_1 = require("@nestjs/platform-express");
const lesson_service_1 = require("../lesson/lesson.service");
let PersonController = class PersonController {
    constructor(personService, lessonService) {
        this.personService = personService;
        this.lessonService = lessonService;
    }
    body2(createPersonDto, files) {
        console.log(files);
        return `received: ${JSON.stringify(createPersonDto)}`;
    }
    create(createPersonDto) {
        return `received: ${JSON.stringify(createPersonDto)}`;
    }
    findAll() {
        return this.lessonService.findAll();
    }
    query(name, age) {
        return `received: name=${name},age=${age}`;
    }
    update(id, updatePersonDto) {
        return this.personService.update(+id, updatePersonDto);
    }
    remove(id) {
        return this.personService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto,
        Array]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "body2", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "query", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_person_dto_1.UpdatePersonDto]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "remove", null);
PersonController = __decorate([
    (0, common_1.Controller)('api/person'),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        lesson_service_1.LessonService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map