const UglifyJS = require('uglify-js');
const code = 'var a = 100';
const ast = UglifyJS.parse(code);
console.log(ast);