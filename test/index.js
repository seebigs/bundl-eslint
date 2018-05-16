/**
 * Just make sure that we get some output from failed rules
 * Errors trigger process.exit() so we can't use automated tests
 */

var eslint = require('../index.js');

eslint({}).exec([__dirname + '/_angry_linter.js']);
