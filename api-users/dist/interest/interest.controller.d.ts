import { InterestService } from './interest.service';
import { InterestDTO } from './dto/interest.dto';
export declare class InterestController {
    private readonly interestService;
    constructor(interestService: InterestService);
    create(interestDTO: InterestDTO): Promise<import("../common/interfaces/interest.interface").IInterest>;
    findAll(): Promise<import("../common/interfaces/interest.interface").IInterest[]>;
    findOne(id: String): Promise<import("../common/interfaces/interest.interface").IInterest>;
    update(id: String, interestDTO: InterestDTO): Promise<import("../common/interfaces/interest.interface").IInterest>;
    delete(id: String): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
