export declare class UserDTO {
    readonly name: String;
    readonly last_name: String;
    readonly email: String;
    readonly password: String;
    readonly main_picture_profile: String;
    readonly min_picture_profile: String;
    readonly max_picuture_profile: String;
    readonly description: String;
    readonly birthdate: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly category: Category[];
}
export declare class Interest {
    readonly name: String;
}
export declare class Category {
    readonly name: String;
    readonly interests: Interest[];
}
