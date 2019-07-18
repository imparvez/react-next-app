const Routes = require('next-routes')
const route = new Routes()

route.add('index', '/')
route.add('pages', '/pages')
route.add('about', '/about')

module.exports = route