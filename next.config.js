const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_URL: 'https://ecomangystau.kz',
    API_URL: 'https://storage.ecomangystau.kz'
  }
}