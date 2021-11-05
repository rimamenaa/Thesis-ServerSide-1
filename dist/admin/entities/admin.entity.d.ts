import { Document } from 'mongoose';
export declare type AdminDocument = Admin & Document;
export declare class Admin {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}
export declare const AdminSchema: import("mongoose").Schema<Document<Admin, any, any>, import("mongoose").Model<Document<Admin, any, any>, any, any, any>, {}>;
