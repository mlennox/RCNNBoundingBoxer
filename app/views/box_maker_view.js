/**
 * Created by mlennox on 07/05/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

// actions
import { addImage, removeImage } from '../redux/modules/ui_image_loader'
// components
import Boxer from '../components/boxer'

/**
 *
 */
export class BoxMakerView extends React.Component {
    static propTypes = {
        images_list: React.PropTypes.array.isRequired,
        labels_list: React.PropTypes.array.isRequired,
        current_image: React.PropTypes.string.isRequired
    }

    componentDidMount() {

    }

    render () {
        return (<Boxer  />)
    }
}

const mapStateToProps = (state) => ({
    images_list: state.ui_image_loader.images_list
})

export default connect((mapStateToProps), {

})(BoxMakerView)