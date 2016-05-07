import React from 'react'

const boxer_main = (props) =>
    <section>
        <nav>
            <ul>
                {props.image_list.map((image) => {
                    return <li>{image}</li>
                })}
            </ul>
        </nav>
        <div>
            // list current image here
        </div>
    </section>

boxer_main.propTypes = {
    image_list: React.PropTypes.array.isRequired
    
}

export default boxer_main