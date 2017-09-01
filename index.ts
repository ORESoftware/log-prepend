import {Stream, Writable} from "stream";

export const lp = function (str: string, strm: Writable) {
  return function prependLog() {
    const args = Array.from(arguments);

    const hasNonWhitespace = args.some(function(a){
      let str = String(a);
       return str.length > 0 && /\S/g.test(str);
    });

    if(hasNonWhitespace){
      strm.write(str)
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
  }
};