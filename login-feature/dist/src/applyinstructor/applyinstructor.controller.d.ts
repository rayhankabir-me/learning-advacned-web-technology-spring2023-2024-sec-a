import { ApplyinstructorService } from './applyinstructor.service';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';
export declare class ApplyinstructorController {
    private readonly applyinstructorService;
    constructor(applyinstructorService: ApplyinstructorService);
    create(createApplyinstructorDto: CreateApplyinstructorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateApplyinstructorDto: UpdateApplyinstructorDto): string;
    remove(id: string): string;
}
