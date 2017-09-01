
# log-prepend

Create a console.log or console.error like function, but prepend a string to each line.

## API

```js
const {lp} = require('log-prepend');
const log = lp(' [suman] ', process.stdout);
const logerr = lp(' [suman error] ', process.stderr);

log('a','b','c');
log('log1', 'log2\n3',4,5 + '\n55');

```

To use colors in the prepending string, simply do:

```js
const chalk = require('chalk');
const log = lp(chalk.blue(' [suman] '), process.stdout);
const logerr = lp(chalk.red(' [suman error] '), process.stderr);
```
