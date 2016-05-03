import { createLogger } from '../logger/'
import render from '../../templates/'

const logger = createLogger('boundingboxes')

export const boundingboxHandler = async (ctx, next) => {
    logger.debug('get handler')

    var body = await render('home', { title: 'some title here'})

    logger.debug('body?', body)

    ctx.body = body
    ctx.status = 200
}