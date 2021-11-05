import { Model } from 'mongoose';
import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';
import { Whybycycle, WhybycycleDocument } from './entities/whybycycle.entity';
export declare class WhybycycleService {
    private readonly model;
    constructor(model: Model<WhybycycleDocument>);
    findAll(): Promise<Whybycycle[]>;
    findOne(id: string): Promise<Whybycycle>;
    create(createWhybycycleDto: CreateWhybycycleDto): Promise<Whybycycle>;
    update(id: string, updateWhybycycleDto: UpdateWhybycycleDto): Promise<Whybycycle>;
    delete(id: string): Promise<Whybycycle>;
}
