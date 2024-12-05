"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["UserQueue"] = "users";
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
//# sourceMappingURL=constanst.js.map