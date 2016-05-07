import { createLogger } from '../../../logger/'
const logger = createLogger('ui_image_loader')


// constants
export const ADD_IMAGE = 'ADD_IMAGE'
export const REMOVE_IMAGE = 'REMOVE_IMAGE'

// Actions
export const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image: image
    }
}

export const removeImage = (image) => {
    return {
        type: REMOVE_IMAGE,
        image: image
    }
}

export const actions = {
    addImage,
    removeImage
}


// Action Handlers
const ACTION_HANDLERS = {
    ADD_IMAGE: (state, action) => {
        logger.debug('adding an image', state)
        return [...state, action.image]
    },
    REMOVE_IMAGE: (state, action) => {
        logger.debug('removing an image', state)
        // remove the image from the list
    }
}

// Reducer
const initial_state = {
    image_list: []
}

export default (state = initial_state, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}