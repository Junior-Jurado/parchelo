"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMSG = exports.LocationMSG = exports.EventMSG = exports.CategoryMSG = exports.InterestMSG = exports.UserMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["UserQueue"] = "users";
    RabbitMQ["CategoryQueue"] = "categories";
    RabbitMQ["InterestQueue"] = "interests";
    RabbitMQ["EventQueue"] = "events";
    RabbitMQ["LocationQueue"] = "locations";
    RabbitMQ["NotificationQueue"] = "notifications";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var UserMSG;
(function (UserMSG) {
    UserMSG["CREATE"] = "CREATE_USER";
    UserMSG["FIND_ALL"] = "FIND_USERS";
    UserMSG["FIND_ONE"] = "FIND_USER";
    UserMSG["UPDATE"] = "UPDATE_USER";
    UserMSG["DELETE"] = "DELETE_USER";
    UserMSG["VALID_USER"] = "VALID_USER";
})(UserMSG || (exports.UserMSG = UserMSG = {}));
var InterestMSG;
(function (InterestMSG) {
    InterestMSG["CREATE"] = "CREATE_INTEREST";
    InterestMSG["FIND_ALL"] = "FIND_INTERESTS";
    InterestMSG["FIND_ONE"] = "FIND_INTEREST";
    InterestMSG["UPDATE"] = "UPDATE_INTEREST";
    InterestMSG["DELETE"] = "DELETE_INTEREST";
})(InterestMSG || (exports.InterestMSG = InterestMSG = {}));
var CategoryMSG;
(function (CategoryMSG) {
    CategoryMSG["CREATE"] = "CREATE_CATEGORY";
    CategoryMSG["FIND_ALL"] = "FIND_CATEGORIES";
    CategoryMSG["FIND_ONE"] = "FIND_CATEGORY";
    CategoryMSG["UPDATE"] = "UPDATE_CATEGORY";
    CategoryMSG["DELETE"] = "DELETE_CATEGORY";
})(CategoryMSG || (exports.CategoryMSG = CategoryMSG = {}));
var EventMSG;
(function (EventMSG) {
    EventMSG["CREATE"] = "CREATE_EVENT";
    EventMSG["FIND_ALL"] = "FIND_EVENTS";
    EventMSG["FIND_ONE"] = "FIND_EVENT";
    EventMSG["UPDATE"] = "UPDATE_EVENT";
    EventMSG["DELETE"] = "DELETE_EVENT";
    EventMSG["ADD_ATTENDEE"] = "ADD_ATTENDEE";
    EventMSG["DELETE_ATTENDEE"] = "DELETE_ATTENDEE";
})(EventMSG || (exports.EventMSG = EventMSG = {}));
var LocationMSG;
(function (LocationMSG) {
    LocationMSG["CREATE"] = "CREATE_LOCATION";
    LocationMSG["FIND_ALL"] = "FIND_LOCATIONS";
    LocationMSG["FIND_ONE"] = "FIND_LOCATION";
    LocationMSG["UPDATE"] = "UPDATE_LOCATION";
    LocationMSG["DELETE"] = "DELETE_LOCATION";
})(LocationMSG || (exports.LocationMSG = LocationMSG = {}));
var NotificationMSG;
(function (NotificationMSG) {
    NotificationMSG["CREATE"] = "CREATE_NOTIFICATION";
    NotificationMSG["FIND_ALL"] = "FIND_NOTIFICATIONS";
    NotificationMSG["FIND_ONE"] = "FIND_NOTIFICATION";
    NotificationMSG["UPDATE"] = "UPDATE_NOTIFICATION";
    NotificationMSG["DELETE"] = "DELETE_NOTIFICATION";
})(NotificationMSG || (exports.NotificationMSG = NotificationMSG = {}));
//# sourceMappingURL=constanst.js.map