"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["LocationQueue"] = "locations";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var LocationMSG;
(function (LocationMSG) {
    LocationMSG["CREATE"] = "CREATE_LOCATION";
    LocationMSG["FIND_ALL"] = "FIND_LOCATIONS";
    LocationMSG["FIND_ONE"] = "FIND_LOCATION";
    LocationMSG["UPDATE"] = "UPDATE_LOCATION";
    LocationMSG["DELETE"] = "DELETE_LOCATION";
})(LocationMSG || (exports.LocationMSG = LocationMSG = {}));
//# sourceMappingURL=constanst.js.map