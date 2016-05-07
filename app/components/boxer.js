/**
 * Created by mlennox on 07/05/2016.
 */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

/**
 *
 */
export class BoxerView extends React.Component {
    static propTypes = {
        images_list: PropTypes.array.isRequired,
        labels_list: PropTypes.array.isRequired,
        current_image: PropTypes.string.isRequired
    }

    componentDidMount() {

    }

    render () {
        return (<p>boxer component</p>)
    }
}

const mapStateToProps = (state) => ({
    images_list: state.
})

export default connect((mapStateToProps), {

})(BoxerView)