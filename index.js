import { createLogger } from './server/logger'
import router from './server/router'

import koa from 'koa'

const app = new koa()
const logger = createLogger('server')

app.use(router.routes())

app.listen(3000, () => logger.debug('server is listening on port 3000'))
