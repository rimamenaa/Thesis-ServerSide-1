import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';
import { BicycleService } from './bicycle.service';
export declare class BicycleController {
    private readonly service;
    constructor(service: BicycleService);
    index(): Promise<import("./entities/bicycle.entity").Bicycle[]>;
    find(id: string): Promise<import("./entities/bicycle.entity").Bicycle>;
    create(bicycle: CreateBicycleDto): Promise<import("./entities/bicycle.entity").Bicycle>;
    update(id: string, updateBicycleDto: UpdateBicycleDto): Promise<import("./entities/bicycle.entity").Bicycle>;
    delete(id: string): Promise<import("./entities/bicycle.entity").Bicycle>;
}
