export enum RabbitMQ {
    UserQueue = 'users',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    FIND_BY_EMAIL = 'FIND_USER_BY_EMAIL',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
    ADD_CATEGORY_INTEREST = 'ADD_CATEGORY_INTEREST_USER'

}
