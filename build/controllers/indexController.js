"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send("Hello from controller");
    }
}
exports.indexController = new IndexController();
