import { createLogger } from '../logger/'

const logger = createLogger('boundingboxes')

export const boundingboxHandler = async (ctx, next) => {
    logger.debug('get handler')

    ctx.body = 'hit the bounding box handler'
    ctx.status = 200
    
    

    await next
}