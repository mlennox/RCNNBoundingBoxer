import { createLogger } from './server/logger'
import { createRoutes } from './server/router'
import koa from 'koa'

const logger = createLogger('server')

const app = new koa()

createRoutes(app)

app.listen(3000, () => logger.debug('server is listening on port 3000'))
