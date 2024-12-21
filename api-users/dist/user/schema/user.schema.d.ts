import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    categories: mongoose.Types.ObjectId[];
    last_name: string;
    email: string;
    password: string;
    description: string;
    birthdate: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    main_picture_profile?: string;
    min_picture_profile?: string;
    max_picture_profile?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    categories: mongoose.Types.ObjectId[];
    last_name: string;
    email: string;
    password: string;
    description: string;
    birthdate: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    main_picture_profile?: string;
    min_picture_profile?: string;
    max_picture_profile?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    categories: mongoose.Types.ObjectId[];
    last_name: string;
    email: string;
    password: string;
    description: string;
    birthdate: NativeDate;
    created_at: NativeDate;
    updated_at: NativeDate;
    main_picture_profile?: string;
    min_picture_profile?: string;
    max_picture_profile?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
