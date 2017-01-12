/**
 * ESLint extension for Bundl
 */

var CLIEngine = require('eslint').CLIEngine;


module.exports = function (options) {
    options = options || {};

    var cli = new CLIEngine(options);

    function one (contents, r) {
        var bundl = this;

        var response = cli.executeOnText(contents, r.src[0]).results;

        var formatter = CLIEngine.getFormatter();
        var output = formatter(response);
        if (output) {
            bundl.log(output);
        }

        response.forEach(function (res) {
            if (res.errorCount) {
                process.exit(0);
            }
        });

        return contents;
    }

    return {
        one: one
    };

};
