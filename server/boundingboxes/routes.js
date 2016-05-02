import _router from 'koa-router'
import { boundingboxHandler } from './index'

const router = new _router({
    prefix: 'boundingboxes'
})

router.get('/', boundingboxHandler)

export default router