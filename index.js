import { createLogger } from './logger/'
import koa from 'koa'
import router from './server/router'

const logger = createLogger('server')

const app = new koa()

app.use(router.routes())

app.listen(3000, () => {
    logger.debug('server is listening on port 3000');
})
