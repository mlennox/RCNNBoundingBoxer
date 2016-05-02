import _debug from 'debug'

export const createLogger = (module_name, suffix) =>  {
    var label = module_name + (suffix ? ':' + suffix : '')
    return {
        debug: _debug('app:' + label),
        error: _debug('app:error:' + label)
    }
}
