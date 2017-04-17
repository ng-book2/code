"use strict";
var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.get = function () {
        console.log('Getting resource...');
    };
    return ApiService;
}());
exports.ApiService = ApiService;
