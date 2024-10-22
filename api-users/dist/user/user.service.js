"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    create(userDTO) {
        const user = {
            id: (0, uuid_1.v4)(),
            ...userDTO
        };
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findUser(id) {
        return this.users.find((u) => u.id === id);
    }
    findUserByEmail(email) {
        console.log(typeof email);
        return this.users.find((u) => u.email === email);
    }
    updateUser(email, user) {
        const newUser = { email, ...user };
        this.users = this.users.map((u) => (u.email === email ? newUser : u));
        return newUser;
    }
    deleteUser(email) {
        this.users = this.users.filter((u) => u.email !== email);
        return 'User deleted';
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map