import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';
import { WhybycycleService } from './whybycycle.service';
export declare class WhybycycleController {
    private readonly service;
    constructor(service: WhybycycleService);
    index(): Promise<import("./entities/whybycycle.entity").Whybycycle[]>;
    find(id: string): Promise<import("./entities/whybycycle.entity").Whybycycle>;
    create(whybycycle: CreateWhybycycleDto): Promise<import("./entities/whybycycle.entity").Whybycycle>;
    update(id: string, updateWhybycycleDto: UpdateWhybycycleDto): Promise<import("./entities/whybycycle.entity").Whybycycle>;
    delete(id: string): Promise<import("./entities/whybycycle.entity").Whybycycle>;
}
