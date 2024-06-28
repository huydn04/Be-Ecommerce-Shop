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
// route
const bill_routes_1 = __importDefault(require("./api/routes/bill.routes"));
const billDetails_routes_1 = __importDefault(require("./api/routes/billDetails.routes"));
const categories_routes_1 = __importDefault(require("./api/routes/categories.routes"));
const comments_routes_1 = __importDefault(require("./api/routes/comments.routes"));
const product_routes_1 = __importDefault(require("./api/routes/product.routes"));
dotenv_1.default.config();
const port = config_services_1.default.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
(0, db_config_1.default)();
app.use('/api/v1/bill', bill_routes_1.default);
app.use('/api/v1/billDetails', billDetails_routes_1.default);
app.use('/api/v1/categories', categories_routes_1.default);
app.use('/api/v1/comments', comments_routes_1.default);
app.use('/api/v1/product', product_routes_1.default);
app.get("/", async (req, res) => {
    res.send("hehehe");
});
app.listen(port, () => {
    console.log(port);
});
// app.listen(config.PORT, () => {
//   console.log(config.PORT);
// });
