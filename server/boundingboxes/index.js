import { createLogger } from '../logger/'

const logger = createLogger('boundingboxes')

export const boundingboxHandler = async (ctx, next) => {
    logger.debug('get handler')

    ctx.body = {
        view: 'home',
        data: { title: 'some title here'}
    }
    //
    // next()

}