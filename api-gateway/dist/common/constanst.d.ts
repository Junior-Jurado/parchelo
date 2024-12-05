export declare enum RabbitMQ {
    UserQueue = "users",
    CategoryQueue = "categories",
    InterestQueue = "interests",
    EventQueue = "events",
    LocationQueue = "locations",
    NotificationQueue = "notifications"
}
export declare enum UserMSG {
    CREATE = "CREATE_USER",
    FIND_ALL = "FIND_USERS",
    FIND_ONE = "FIND_USER",
    UPDATE = "UPDATE_USER",
    DELETE = "DELETE_USER",
    VALID_USER = "VALID_USER"
}
export declare enum InterestMSG {
    CREATE = "CREATE_INTEREST",
    FIND_ALL = "FIND_INTERESTS",
    FIND_ONE = "FIND_INTEREST",
    UPDATE = "UPDATE_INTEREST",
    DELETE = "DELETE_INTEREST"
}
export declare enum CategoryMSG {
    CREATE = "CREATE_CATEGORY",
    FIND_ALL = "FIND_CATEGORIES",
    FIND_ONE = "FIND_CATEGORY",
    UPDATE = "UPDATE_CATEGORY",
    DELETE = "DELETE_CATEGORY"
}
export declare enum EventMSG {
    CREATE = "CREATE_EVENT",
    FIND_ALL = "FIND_EVENTS",
    FIND_ONE = "FIND_EVENT",
    UPDATE = "UPDATE_EVENT",
    DELETE = "DELETE_EVENT",
    ADD_ATTENDEE = "ADD_ATTENDEE",
    DELETE_ATTENDEE = "DELETE_ATTENDEE"
}
export declare enum LocationMSG {
    CREATE = "CREATE_LOCATION",
    FIND_ALL = "FIND_LOCATIONS",
    FIND_ONE = "FIND_LOCATION",
    UPDATE = "UPDATE_LOCATION",
    DELETE = "DELETE_LOCATION"
}
export declare enum NotificationMSG {
    CREATE = "CREATE_NOTIFICATION",
    FIND_ALL = "FIND_NOTIFICATIONS",
    FIND_ONE = "FIND_NOTIFICATION",
    UPDATE = "UPDATE_NOTIFICATION",
    DELETE = "DELETE_NOTIFICATION"
}
