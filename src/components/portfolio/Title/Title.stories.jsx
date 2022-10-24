import React from 'react'

import { Title } from './Title'

export default {
    title: 'Personal/Title',
    component: Title
}

const Template = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
    type: 'h1',
    text: "Lorem, ipsum."
}
