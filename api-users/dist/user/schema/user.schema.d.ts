import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    last_name: string;
    email: string;
    password: string;
    main_picture_profile: string;
    min_picture_profile: string;
    max_picuture_profile: string;
    description: string;
    birthdate: NativeDate;
    categories: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    last_name: string;
    email: string;
    password: string;
    main_picture_profile: string;
    min_picture_profile: string;
    max_picuture_profile: string;
    description: string;
    birthdate: NativeDate;
    categories: mongoose.Types.ObjectId[];
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    last_name: string;
    email: string;
    password: string;
    main_picture_profile: string;
    min_picture_profile: string;
    max_picuture_profile: string;
    description: string;
    birthdate: NativeDate;
    categories: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
