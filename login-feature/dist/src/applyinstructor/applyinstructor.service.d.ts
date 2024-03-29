import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';
export declare class ApplyinstructorService {
    create(createApplyinstructorDto: CreateApplyinstructorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateApplyinstructorDto: UpdateApplyinstructorDto): string;
    remove(id: number): string;
}
