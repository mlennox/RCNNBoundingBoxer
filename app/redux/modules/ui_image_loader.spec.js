import test from 'ava'
import freeze from 'deep-freeze-es6'
import difference from 'lodash/difference'
import {createLogger} from '../../../logger/'
var logger = createLogger('ui_image_loader_spec')

import reducer, { ADD_IMAGE, REMOVE_IMAGE } from './ui_image_loader'

test('check add image handler does not mutate the array', t => {

    var image_list_before = ['something']

    freeze(image_list_before)

    t.notThrows(() => {
        reducer(image_list_before, {type: ADD_IMAGE, image: 'another'} )
    })
})


test('check add image adds the image', t => {

    var image_list_before = ['something']
    var expected_image_list_after = ['something', 'another']
    var image_list_after = reducer(image_list_before, {type: ADD_IMAGE, image: 'another'} )

    var diffs = difference(expected_image_list_after, image_list_after)
    t.is(diffs.length, 0)
})