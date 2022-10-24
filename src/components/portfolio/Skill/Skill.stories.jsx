import React from "react";
import { Skill } from "./Skill";

export default {
    title: 'Personal/Skill',
    component: Skill
}

const Template = args => <Skill {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Default'
}