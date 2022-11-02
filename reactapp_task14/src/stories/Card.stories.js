import React from "react";
import { CardDisplay } from './Component';

export default {
    title: 'Component/Card',
    component: CardDisplay,
}

const Template = (args) => <CardDisplay {...args} />

export const MediaCard = Template.bind({});
MediaCard.args = {
    label: 'MediaCard',
    image: "Insert iamge",
    alt: "Insert alt for image"
}


