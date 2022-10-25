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

export const Skill = ({ title, skills }) => {

    return (
        <article className="skill">
            <Title type='h3' text={title.toLowerCase()} />
            <HorizontalLine />
            <UnorderedList list={skills} />
        </article>
    )
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
}

Skill.defaultProps = {
    title: "Skill",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
}