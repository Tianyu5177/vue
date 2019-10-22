if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vue.common.prod.js')
} else if() {
  module.exports = require('./vue.common.dev.js')
}
