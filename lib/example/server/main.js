'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8000;
var app = (0, _express2.default)();

app.use("/", _index2.default);

var server = app.listen(port, function () {
    console.log("== Traffic-Logger example application start.");
    console.log("    (Running Port Number:", port, ")");
    console.log("  * If you want to finish this app, please input \"ctrl+c (^C)\"");
});