"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const normalisedURLPath_1 = require("../normalisedURLPath");
class UserDeleter {
    constructor(querier, path) {
        this.querier = querier;
        this.path = path;
    }
    static create(querier) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiVersion = yield querier.getAPIVersion();
            if (utils_1.maxVersion(apiVersion, "2.7") === "2.7") {
                throw new Error("Please use core version >= 3.5 to call this function.");
            }
            return new UserDeleter(querier, new normalisedURLPath_1.default("/user/remove"));
        });
    }
    deleteUser(userId) {
        return this.querier.sendPostRequest(this.path, {
            userId,
        });
    }
}
exports.UserDeleter = UserDeleter;
//# sourceMappingURL=userDeleter.js.map
