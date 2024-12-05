"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["EventQueue"] = "events";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
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
//# sourceMappingURL=constanst.js.map