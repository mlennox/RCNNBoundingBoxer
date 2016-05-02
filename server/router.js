import koaRouter from 'koa-router'
import { createLogger } from '../logger/'

const logger = createLogger('mainrouter')
const router = new koaRouter();


var addRoute = (routes) => {
    router
        .use('', routes.middleware())
        // .use(routes.allowedMethods())
}

// load sub-module routes here
import boundingboxesRoutes from './boundingboxes/routes'

addRoute(boundingboxesRoutes)



export default router

logger.debug('registered routes for this app')
for (var route of router.stack){
    logger.debug('registered route' +
        '\n    path : ' + route.path +
        '\n    params : ' + route.paramNames +
        '\n    methods : ' + route.methods)
}
