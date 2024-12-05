"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["NotificationQueue"] = "notifications";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var NotificationMSG;
(function (NotificationMSG) {
    NotificationMSG["CREATE"] = "CREATE_NOTIFICATION";
    NotificationMSG["FIND_ALL"] = "FIND_NOTIFICATIONS";
    NotificationMSG["FIND_ONE"] = "FIND_NOTIFICATION";
    NotificationMSG["UPDATE"] = "UPDATE_NOTIFICATION";
    NotificationMSG["DELETE"] = "DELETE_NOTIFICATION";
})(NotificationMSG || (exports.NotificationMSG = NotificationMSG = {}));
//# sourceMappingURL=constanst.js.map