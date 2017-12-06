


const {lp} = require('log-prepend');
const fn = lp(' [foobar] ', process.stdout);


// fn('\n');
fn('','\n');
// fn();
// fn('','','');
fn('log1', 'log2\n3',4,5 + '\n55');
fn('a','b','c');