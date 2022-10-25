import React from "react";
import { SkillGroup } from "./SkillGroup";

export default {
    title: 'Personal/Skill Group',
    component: SkillGroup
}

const Template = args => <SkillGroup {...args} />

export const Default = Template.bind({})