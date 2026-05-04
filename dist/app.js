"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./api/controller/UserController");
const app = (0, routing_controllers_1.createExpressServer)({
    controllers: [UserController_1.UserController]
});
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.status(200).json('hallo from typeScript');
});
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
