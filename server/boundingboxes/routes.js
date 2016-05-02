import koaRouter from 'koa-router'
import { boundingboxHandler } from './index'

const router = new koaRouter({
    prefix: '/boundingboxes'
})

router.get('/something', boundingboxHandler)

export default router