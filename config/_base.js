/**
 * Created by mlennox on 12/05/2016.
 */
import {createLogger} from '../logger'
import path from 'path'
import { argv } from 'yargs'

const logger = createLogger('config','base')

logger.debug('Creating configuration')

const defaults = {
    port: 3000,
    host: 'localhost',
    env: 'development'
}

const config = {
    env: process.env.NODE_ENV || defaults.env,

    // project layout
    path_base: path.resolve(__dirname, '../'),
    dir_client: 'app',
    dir_server: 'server',
    dir_dist: 'dist',

    // server config
    server_host: argv.host || defaults.host,
    server_port: argv.port || defaults.port,

    // webpack compiler config
    compiler_css_modules     : true,
    compiler_devtool         : 'source-map',
    compiler_hash_type       : 'hash',
    compiler_fail_on_warning : false,
    compiler_quiet           : false,
    compiler_public_path     : '',
    compiler_stats           : {
        chunks : false,
        chunkModules : false,
        colors : true
    },
    compiler_vendor : [
        'history',
        'react',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux'
    ],


    // tests
    coverage_enabled: !argv.watch,
    coverage_reporters: {
        // some ava config here?
    }
}

/**
 * TODO : Will need to add these to .eslintrc when installed...
 */
config.globals = {
    'process.env'  : {
        'NODE_ENV' : JSON.stringify(config.env)
    },
    'NODE_ENV'     : config.env,
    '__DEV__'      : config.env === 'development',
    '__PROD__'     : config.env === 'production',
    '__TEST__'     : config.env === 'test',
    '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
    '__DEBUG_NEW_WINDOW__' : !!argv.nw,
    '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')

config.compiler_vendor = config.compiler_vendor
    .filter(dep => {
        if (pkg.dependencies[dep]) return true

        logger.debug(
            `Package "${dep}" was not found as an npm dependency in package.json; ` +
            `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
        )
    })

// ------------------------------------
// Utilities
// ------------------------------------
config.utils_paths = (() => {
    const resolve = path.resolve

    const base = (...args) =>
        resolve.apply(resolve, [config.path_base, ...args])

    return {
        base   : base,
        client : base.bind(null, config.dir_client),
        dist   : base.bind(null, config.dir_dist)
    }
})()

export default config