const pageGenerator = require('./generators/pages/index')

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('page', pageGenerator)
}
