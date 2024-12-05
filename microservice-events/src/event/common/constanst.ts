export enum RabbitMQ {
    EventQueue = 'events',
}

export enum EventMSG {
    CREATE = 'CREATE_EVENT',
    FIND_ALL = 'FIND_EVENTS',
    FIND_ONE = 'FIND_EVENT',
    UPDATE = 'UPDATE_EVENT',
    DELETE = 'DELETE_EVENT',
    ADD_ATTENDEE = 'ADD_ATTENDEE',
    DELETE_ATTENDEE = 'DELETE_ATTENDEE',
}