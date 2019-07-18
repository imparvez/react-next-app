const next = require('next')
const Koa = require('Koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// Pages URL Config
const routes = require('./routes/url')
const NextRootDirChange = require('./middleware/NextRootDirChange')

const PORT = 5000
const dev = process.env.NODE_ENV === 'development'
console.log(`PROCESS.ENV.NODE_ENV => ${process.env.NODE_ENV}`)
// next API: whether to launch Next.js in dev mode - default false
const app = next({ dev })

global.handle = routes.getRequestHandler(app)

app.prepare()
    .then(() => {
        const server = new Koa()
        const router = new Router()
        server.use(bodyParser())

        router.all('*', NextRootDirChange)
        
        server.use(router.routes())
        server.use(router.allowedMethods())
        
        server.listen(PORT, (err) => {
            if (err) throw err
            console.log(`DEV server is running at http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.log(`Error => ${err}`)
    })