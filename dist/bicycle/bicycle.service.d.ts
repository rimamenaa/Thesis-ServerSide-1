import { Model } from 'mongoose';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';
import { Bicycle, BicycleDocument } from './entities/bicycle.entity';
export declare class BicycleService {
    private readonly model;
    constructor(model: Model<BicycleDocument>);
    findAll(): Promise<Bicycle[]>;
    findOne(id: string): Promise<Bicycle>;
    create(createBicycleDto: CreateBicycleDto): Promise<Bicycle>;
    update(id: string, updateBicycleDto: UpdateBicycleDto): Promise<Bicycle>;
    delete(id: string): Promise<Bicycle>;
}
