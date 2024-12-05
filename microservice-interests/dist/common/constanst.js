"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["InterestQueue"] = "interests";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var InterestMSG;
(function (InterestMSG) {
    InterestMSG["CREATE"] = "CREATE_INTEREST";
    InterestMSG["FIND_ALL"] = "FIND_INTERESTS";
    InterestMSG["FIND_ONE"] = "FIND_INTEREST";
    InterestMSG["UPDATE"] = "UPDATE_INTEREST";
    InterestMSG["DELETE"] = "DELETE_INTEREST";
})(InterestMSG || (exports.InterestMSG = InterestMSG = {}));
//# sourceMappingURL=constanst.js.map