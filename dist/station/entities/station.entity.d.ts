import { Document } from 'mongoose';
export declare type StationDocument = Station & Document;
export declare class Station {
    location: string;
    numberOfBikes: number;
    address: string;
    contact: string;
}
export declare const StationSchema: import("mongoose").Schema<Document<Station, any, any>, import("mongoose").Model<Document<Station, any, any>, any, any, any>, {}>;
