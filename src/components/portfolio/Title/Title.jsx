import PropTypes from 'prop-types'
import React from 'react'
import './title.css'

export const Title = ({ type, text }) => {
    const header = {
        h1: () => <h1>{text}</h1>,
        h2: () => <h2>{text}</h2>,
        h3: () => <h3>{text}</h3>,
        h4: () => <h4>{text}</h4>,
        h5: () => <h5>{text}</h5>,
        h6: () => <h6>{text}</h6>,
    }

    return (
        <>
            {
                header[type]()
            }
        </>
    )
}

Title.propTypes = {
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    text: PropTypes.string.isRequired,
}

Title.defaultProps = {
    type: 'h1',
    text: 'Hello World'
}