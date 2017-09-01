


const {lp} = require('log-prepend');

const fn = lp(' [suman] ', process.stdout);

fn();
fn();

fn('log1', 'log2\n3',4,5 + '\n55');

fn('a','b','c');