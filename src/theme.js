var fs = require('fs')
var classes = require('bespoke-classes')
var insertCss = require('insert-css')

module.exports = function () {
  var css = fs.readFileSync(__dirname + '/../css/main.css', 'utf8')
  insertCss(css, { prepend: true })

  return function (deck) {
    classes()(deck)
  }
}
