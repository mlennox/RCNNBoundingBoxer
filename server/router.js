/**
 * Should this file exist?
 *
 * pros:
 * It feels right to have one place to register all the routes
 * and in such a way as to force the routes to be defined fully
 * within the sub modules
 *
 * cons:
 * you need to manually import and register the routes
 */

import koaRouter from 'koa-router'
import { createLogger } from './logger'

const logger = createLogger('mainrouter')
const router = new koaRouter();

/**
 * syntactic sugar for registering the routes
 * @param routes
 */
var addRoute = (routes) => router.use('', routes.middleware())

/**
 * Import the sub module routes and handlers
 * ---------------------------------
 * Modules must be imported - they cannot be dynamically loaded
 * TODO : could we generate a module that would search the filesystem and
 * automagically load all the routes for us?
 */
import boundingboxesRoutes from './boundingboxes/routes'

addRoute(boundingboxesRoutes)
/**
 * ---------------------------------
 */

// import this and use app.use(router.routes()) in the server
export default router


/**
 * import this and pass your 'new koa()' to it
 * @param koa_app
 */
export var createRoutes = (koa_app) => {
    koa_app
        .use(router.routes())
        .use(router.allowedMethods())
}

// just console log the regsitered routes
logger.debug('registered routes for this app')
for (var route of router.stack){
    logger.debug('registered route' +
        '\n    path : ' + route.path +
        '\n    params : ' + route.paramNames +
        '\n    methods : ' + route.methods)
}
