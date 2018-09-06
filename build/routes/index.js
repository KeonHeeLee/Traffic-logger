"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/", function (req, res) {
    return res.status(200).json({
        message: "GET = Hello World!"
    });
});

router.post("/hello", function (req, res) {
    return res.status(200).json({
        message: "POST = Hello World!"
    });
});

exports.default = router;