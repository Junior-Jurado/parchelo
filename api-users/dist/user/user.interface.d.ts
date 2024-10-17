export interface IUser {
    id?: String;
    name: String;
    last_name: String;
    email: String;
    password: String;
    main_picture_profile: String;
    min_picture_profile: String;
    max_picuture_profile: String;
    description: String;
    birthdate: Date;
    created_at: Date;
    updated_at: Date;
    category: ICategory[];
}
export interface IInterest {
    id?: String;
    name: String;
}
export interface ICategory {
    id?: String;
    name: String;
    interests: IInterest[];
}
