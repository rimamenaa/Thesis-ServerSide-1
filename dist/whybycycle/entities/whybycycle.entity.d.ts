import { Document } from 'mongoose';
export declare type WhybycycleDocument = Whybycycle & Document;
export declare class Whybycycle {
    title: string;
    description: string;
    photo: string;
    createdAt: Date;
}
export declare const WhybycycleSchema: import("mongoose").Schema<Document<Whybycycle, any, any>, import("mongoose").Model<Document<Whybycycle, any, any>, any, any>, {}>;
