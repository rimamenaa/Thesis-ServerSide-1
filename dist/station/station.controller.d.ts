import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { StationService } from './station.service';
export declare class StationController {
    private readonly service;
    constructor(service: StationService);
    index(): Promise<import("./entities/station.entity").Station[]>;
    find(id: string): Promise<import("./entities/station.entity").Station>;
    create(station: CreateStationDto): Promise<import("./entities/station.entity").Station>;
    update(id: string, updateStationDto: UpdateStationDto): Promise<import("./entities/station.entity").Station>;
    delete(id: string): Promise<import("./entities/station.entity").Station>;
}
