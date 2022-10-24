import PropTypes from 'prop-types'
import React from 'react'
import { Title } from '../Title/Title'
import './skill.css'

const UnorderedList = ({list}) => {
    return (
        <ul>
            {list.map(list_item => <li>{list_item}</li>)}
        </ul>
    )
}

const HorizontalLine = () => <hr />

export const Skill = ({ title }) => {
    const listOfSkills = ['ES6', 'React | Redux', 'Typescript', 'NodeJS']

    return (
        <div className="skill">
            <Title type='h3' text={title} />
            <HorizontalLine />
            <UnorderedList list={listOfSkills} />
        </div>
    )
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
}

Skill.defaultProps = {
    title: "Skill Name"
}