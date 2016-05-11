import fs from 'fs-extra'
import { createLogger } from '../logger/'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import config from '../config'

const logger = createLogger('compile')

const paths = config.utils_paths

logger.debug('Create webpack compiler.')
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
    const jsonStats = stats.toJson()

    logger.debug('Webpack compile completed.')
    console.log(stats.toString(config.compiler_stats))

    if (err) {
        logger.debug('Webpack compiler encountered a fatal error.', err)
        process.exit(1)
    } else if (jsonStats.errors.length > 0) {
        logger.debug('Webpack compiler encountered errors.')
        console.log(jsonStats.errors)
        process.exit(1)
    } else if (jsonStats.warnings.length > 0) {
        logger.debug('Webpack compiler encountered warnings.')

        if (config.compiler_fail_on_warning) {
            process.exit(1)
        }
    } else {
        logger.debug('No errors or warnings encountered.')
    }

    logger.debug('Copy static assets to dist folder.')
    fs.copySync(paths.client('static'), paths.dist())
})
