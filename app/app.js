import React from 'react'
import render from 'react-dom'
import Boxer from './components/boxer'

const dummy_image_list = ['image1', 'another image', 'more image']

render(<Boxer image_list={dummy_image_list} />, document.getElementById('main'))