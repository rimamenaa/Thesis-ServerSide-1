import { Document } from 'mongoose';
export declare type SuggestionsDocument = Suggestions & Document;
export declare class Suggestions {
    photo: string;
    location: string;
    duration: string;
    distance: string;
    description: string;
    createdAt: Date;
}
export declare const SuggestionsSchema: import("mongoose").Schema<Document<Suggestions, any, any>, import("mongoose").Model<Document<Suggestions, any, any>, any, any, any>, {}>;
