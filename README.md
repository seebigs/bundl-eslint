# bundl-eslint

*Easily check your code for style and correctness with the popular [ESLint](http://eslint.org/) utility*

*Runs with the amazing [Bundl](https://github.com/seebigs/bundl) build tool*

## Install

```
$ npm install --save-dev bundl-eslint
```

## Configure

```js
var bundl = require('bundl');
var eslint = require('bundl-eslint');

bundl.task('lint', function () {
    var options = {
        rules: {
            "no-unused-vars": 0
        }
    };

    return bundl('src/javascripts/*')
        .then(eslint(options))
        .go();
});
```

## Use

```
$ node bundl lint
```

## Options

Pass the same object that you would put into your .eslintrc.json file ([See Full ESLint Documentation](http://eslint.org/docs/user-guide/configuring))

```js
eslint({
    extends: "eslint:recommended",
    env: {
        browser: true
    },
    globals: {
        "foo": true
    },
    rules: {
        eqeqeq: "warn"
    }
})
```
