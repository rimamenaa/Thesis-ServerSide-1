import { Model } from 'mongoose';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station, StationDocument } from './entities/station.entity';
export declare class StationService {
    private readonly model;
    constructor(model: Model<StationDocument>);
    findAll(): Promise<Station[]>;
    findOne(id: string): Promise<Station>;
    create(createStationDto: CreateStationDto): Promise<Station>;
    update(id: string, updateStationDto: UpdateStationDto): Promise<Station>;
    delete(id: string): Promise<Station>;
}
