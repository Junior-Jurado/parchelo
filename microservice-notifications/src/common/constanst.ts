export enum RabbitMQ {
    NotificationQueue = 'notifications',
}

export enum NotificationMSG {
    CREATE = 'CREATE_NOTIFICATION',
    FIND_ALL = 'FIND_NOTIFICATIONS',
    FIND_ONE = 'FIND_NOTIFICATION',
    UPDATE = 'UPDATE_NOTIFICATION',
    DELETE = 'DELETE_NOTIFICATION',
}