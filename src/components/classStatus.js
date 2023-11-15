"use strict";
exports.__esModule = true;
exports.getClassStatus = void 0;
function getClassStatus(threshold, times) {
    var onTimeOrEarly = times.filter(function (time) { return time <= 0; });
    return onTimeOrEarly.length >= threshold ? 'NO' : 'YES';
}
exports.getClassStatus = getClassStatus;
