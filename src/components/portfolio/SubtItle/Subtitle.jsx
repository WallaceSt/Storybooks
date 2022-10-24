import PropTypes from 'prop-types'
import React from 'react'
import './subtitle.css'

export const Subtitle = ({ text }) => {
    return (
        <p>{text}</p>
    )
}

Subtitle.propTypes = {
    text: PropTypes.string.isRequired
}

Subtitle.defaultProps = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}