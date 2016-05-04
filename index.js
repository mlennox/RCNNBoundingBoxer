import koa from 'koa'
import { createLogger } from './server/logger'
import router from './server/router'
import send from 'koa-send'
import template from './templates'

const app = new koa()
const logger = createLogger('server')

app.use(template)

app.use(router.routes())

// static files
app.use(async (ctx, next) => {
    logger.debug('ctx path', ctx.path)
    if (ctx.path === '/static'){
        await send(ctx, ctx.path)
    }
    next()
})



app.listen(3000, () => logger.debug('server is listening on port 3000'))
