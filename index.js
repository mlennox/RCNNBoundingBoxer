var fs = require('fs')
import { createLogger } from './logger/'

const logger = createLogger('server')

logger.debug(fs)