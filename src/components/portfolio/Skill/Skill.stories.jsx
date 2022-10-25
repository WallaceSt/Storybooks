import React from "react";
import { Skill } from "./Skill";

export default {
    title: 'Personal/Skill',
    component: Skill
}

const Template = args => <Skill {...args} />

export const Javascript = Template.bind({})
Javascript.args = {
    title: 'javascript',
    skills: ['Nodejs', 'Express', 'React', 'JQuery'],
}

export const CSS = Template.bind({})
CSS.args = {
    title: 'css',
    skills: ['CSS3', 'SASS', 'BEM', 'Bootstrap'],
}

export const HTML = Template.bind({})
HTML.args = {
    title: 'html',
    skills: ['HTML5', 'SEO', 'Accessibility'],
}

export const Python = Template.bind({})
Python.args = {
    title: 'python',
    skills: ['Django', 'Mathpotlib', 'Pandas'],
}

export const DEVOps = Template.bind({})
DEVOps.args = {
    title: 'devops',
    skills: ['Docker', 'Jenkins', 'GitLab', 'CI-CD'],
}

export const Database = Template.bind({})
Database.args = {
    title: 'db',
    skills: ['MongoDB', 'PostgreeSQL', 'MySQL', 'GraphQL'],
}