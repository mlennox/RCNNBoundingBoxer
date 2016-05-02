import _router from 'koa-router'

// load sub-module routes here
import boundingboxesRoutes from './boundingboxes/routes'

const router = new _router();

router.use(boundingboxesRoutes.middleware())

export default router