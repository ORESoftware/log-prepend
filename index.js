"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lp = function (str, strm) {
    return function prependLog() {
        var args = Array.from(arguments);
        var hasNonWhitespace = args.some(function (a) {
            var str = String(a);
            return str.length > 0 && /\S/g.test(str);
        });
        if (hasNonWhitespace) {
            strm.write(str);
        }
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
        strm.write('\n');
    };
};
