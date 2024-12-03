export enum RabbitMQ {
    UserQueue = 'users',
    CategoryQueue = 'categories',
    InterestQueue = 'interests',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER'
}

export enum InterestMSG {
    CREATE = 'CREATE_INTEREST',
    FIND_ALL = 'FIND_INTERESTS',
    FIND_ONE = 'FIND_INTEREST',
    UPDATE = 'UPDATE_INTEREST',
    DELETE = 'DELETE_INTEREST',
}

export enum CategoryMSG {
    CREATE = 'CREATE_CATEGORY',
    FIND_ALL = 'FIND_CATEGORIES',
    FIND_ONE = 'FIND_CATEGORY',
    UPDATE = 'UPDATE_CATEGORY',
    DELETE = 'DELETE_CATEGORY',
}