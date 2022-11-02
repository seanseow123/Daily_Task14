import React from "react";
import { number } from "prop-types";
import { Input } from "./Component";

export default {
    title: 'Component/Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const Normal = Template.bind({});
Normal.args = {
    label: 'Normal: ',
    placeholder: 'Enter some data'
}

export const Number = Template.bind({});
Number.args = {
    label: 'Number: ',
    placeholder: 'Enter some number',
    type: number
}