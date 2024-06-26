"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_services_1 = __importDefault(require("./config/server/config.services"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    res.send("hehehe");
});
app.listen(config_services_1.default.PORT, () => {
    console.log(config_services_1.default.PORT);
});
