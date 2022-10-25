import React from "react"
import PropTypes from 'prop-types'

import './skillgroup.css'

import { Skill } from "../Skill/Skill"
import { Title } from "../Title/Title"

export const SkillGroup = () => {
    return (
        <section className="skill-group">
            <Title type="h2" text="Skills" />
            <section className="skill-group__skill-list">
                <Skill
                    skills={[
                        'HTML5',
                        'SEO',
                        'Accessibility'
                    ]}
                    title="html"
                />
                <Skill
                    skills={[
                        'CSS3',
                        'SASS',
                        'BEM',
                        'Bootstrap'
                    ]}
                    title="css"
                />
                <Skill
                    skills={[
                        'Nodejs',
                        'Express',
                        'React',
                        'JQuery'
                    ]}
                    title="javascript"
                />
                <Skill
                    skills={[
                        'Django',
                        'Mathpotlib',
                        'Pandas'
                    ]}
                    title="python"
                />
                <Skill
                    skills={[
                        'MongoDB',
                        'PostgreeSQL',
                        'MySQL',
                        'GraphQL'
                    ]}
                    title="db"
                />
                <Skill
                    skills={[
                        'Docker',
                        'Jenkins',
                        'GitLab',
                        'CI-CD'
                    ]}
                    title="devops"
                />
            </section>
        </section>
    )
}