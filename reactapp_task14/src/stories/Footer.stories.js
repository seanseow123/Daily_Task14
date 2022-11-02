import React from 'react';
import { FooterDisplay } from './Component';

export default {
    title: 'Component/Footer',
    component: FooterDisplay,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <FooterDisplay {...args} />;

export const FooterDis = Template.bind({});
FooterDis.args = {
    label: 'Footer'
  }

