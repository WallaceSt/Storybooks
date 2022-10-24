import React from 'react'

import { Subtitle } from './Subtitle'

export default {
    title: 'Personal/Subtitle',
    component: Subtitle
}

const Template = args => <Subtitle {...args} />

export const Default = Template.bind({})
Default.args = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}
