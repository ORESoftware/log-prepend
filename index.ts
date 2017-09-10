import {Stream, Writable} from "stream";

export const lp = function (str: string, strm: Writable) {
  return function prependLog() {
    const args = Array.from(arguments);

    const hasNonWhitespace = args.some(function (a) {
      let str = String(a);
      // console.log('str => ', str);
      // let one = str.length > 0;
      // let two = /\S/g.test(str);
      // console.log('one => ', one);
      // console.log('two => ', two);
      // return str.length > 0 && /\S/g.test(str);

      // return one && two && true;
      return str.length > 0 && /\S/g.test(str);
    });

    // console.log('args => ', args);
    // console.log('hasNonWhitespace => ', hasNonWhitespace);

    if (hasNonWhitespace) {
      strm.write(str);
    }

    args.forEach(function (s, i) {
      String(s).split('\n').forEach(function (s, i) {
        if (i < 1) {
          strm.write(s + ' ');
        }
        else {
          if (/\S/g.test(s)) {
            strm.write('\n' + str + s);
          }
          else {
            strm.write('\n' + s);
          }

        }
      });
    });

    strm.write('\n');
  }
};