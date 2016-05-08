# Boxing and category assignment tool for training RCNN
This tool is designed to make it easier to add boundary boxes and category labels to an image that will be used to train a neural network.

![Circle-Ci status](https://circleci.com/gh/mlennox/RCNNBoundingBoxer.svg?style=shield&circle-token=:circle-token)

## Usage
You will first specify a list of images either by including them in the 'source_image' folder before launching the tool or later by loading them from the file system after the app is launched.

You will be presented with a list of images on the left hand side. Clicking on one will show you the image in detail and list any bounding box details that have already been saved for that image. You can add new boxes and categories by clicking and dragging over the image and typing in the label when prompted. You can edit existing bounding boxes and updated their labels or even remove them altogether.

You can zoom and pan on the image to aid you in drawing the bounding boxes correctly.

# Tech note (to self)
Installation uses koa@next and koa-router@next at time of writing.
