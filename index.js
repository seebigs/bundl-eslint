/**
 * ESLint extension for Bundl
 */

var CLIEngine = require('eslint').CLIEngine;
var SourceCode = require("eslint").SourceCode;

module.exports = function (options) {
    options = options || {};

    var cli = new CLIEngine(options);
    var formatter = CLIEngine.getFormatter();

    function eslint (srcFiles, done) {
        var results = cli.executeOnFiles(srcFiles).results;
        var output = formatter(results);

        if (output) {
            console.log(output);
        }

        results.forEach(function (res) {
            if (res.errorCount) {
                process.exit(0);
            }
        });

        if (typeof done === 'function') {
            done();
        }
    }

    return {
        name: 'eslint',
        stage: 'src',
        exec: eslint,
    };
};
