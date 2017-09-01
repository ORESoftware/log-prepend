"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lp = function (str, strm) {
    return function prependLog() {
        var args = Array.from(arguments);
        args.length && strm.write(str);
        args.forEach(function (s, i) {
            String(s).split('\n').forEach(function (s, i) {
                if (i < 1) {
                    strm.write(s + ' ');
                }
                else {
                    strm.write('\n' + str + s);
                }
            });
        });
    };
};
