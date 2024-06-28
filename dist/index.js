"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_services_1 = __importDefault(require("./config/server/config.services"));
const db_config_1 = __importDefault(require("./config/database/db.config"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = config_services_1.default.PORT;
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
(0, db_config_1.default)();
app.get("/", async (req, res) => {
    res.send("hehehe");
});
app.listen(port, () => {
    console.log(port);
});
// app.listen(config.PORT, () => {
//   console.log(config.PORT);
// });
