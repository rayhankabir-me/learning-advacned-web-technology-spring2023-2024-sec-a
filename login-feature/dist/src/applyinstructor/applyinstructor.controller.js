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
exports.ApplyinstructorController = void 0;
const common_1 = require("@nestjs/common");
const applyinstructor_service_1 = require("./applyinstructor.service");
const create_applyinstructor_dto_1 = require("./dto/create-applyinstructor.dto");
const update_applyinstructor_dto_1 = require("./dto/update-applyinstructor.dto");
let ApplyinstructorController = class ApplyinstructorController {
    constructor(applyinstructorService) {
        this.applyinstructorService = applyinstructorService;
    }
    create(createApplyinstructorDto) {
        return this.applyinstructorService.create(createApplyinstructorDto);
    }
    findAll() {
        return this.applyinstructorService.findAll();
    }
    findOne(id) {
        return this.applyinstructorService.findOne(+id);
    }
    update(id, updateApplyinstructorDto) {
        return this.applyinstructorService.update(+id, updateApplyinstructorDto);
    }
    remove(id) {
        return this.applyinstructorService.remove(+id);
    }
};
exports.ApplyinstructorController = ApplyinstructorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_applyinstructor_dto_1.CreateApplyinstructorDto]),
    __metadata("design:returntype", void 0)
], ApplyinstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApplyinstructorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplyinstructorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_applyinstructor_dto_1.UpdateApplyinstructorDto]),
    __metadata("design:returntype", void 0)
], ApplyinstructorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplyinstructorController.prototype, "remove", null);
exports.ApplyinstructorController = ApplyinstructorController = __decorate([
    (0, common_1.Controller)('applyinstructor'),
    __metadata("design:paramtypes", [applyinstructor_service_1.ApplyinstructorService])
], ApplyinstructorController);
//# sourceMappingURL=applyinstructor.controller.js.map