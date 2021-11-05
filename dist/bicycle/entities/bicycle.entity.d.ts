import { Document } from 'mongoose';
export declare type BicycleDocument = Bicycle & Document;
export declare class Bicycle {
    category: string;
    description: string;
    photo: string;
    createdAt: Date;
}
export declare const BicycleSchema: import("mongoose").Schema<Document<Bicycle, any, any>, import("mongoose").Model<Document<Bicycle, any, any>, any, any, any>, {}>;
