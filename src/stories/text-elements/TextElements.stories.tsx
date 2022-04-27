import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Bold from 'components/text-elements/Bold/Bold';
import It from 'components/text-elements/It/It';
import Light from 'components/text-elements/Light/Light';

import Caption from 'components/text-elements/Caption/Caption';
import Subtitle from 'components/text-elements/Subtitle/Subtitle';
import Text from 'components/text-elements/Text/Text';
import TextBlock from 'components/layout-elements/TextBlock/TextBlock';
import Title from 'components/text-elements/Title/Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/TextElements',
    component: Title,
} as ComponentMeta<typeof Title>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TextBlock> = (args) => (
    <TextBlock {...args}>
        <Title text="Title" />
        <Subtitle text="Subtitle" />
        <Text>
            Text with <Bold>bold text</Bold> and <It>Italics Text</It> and <Light>Light Text</Light> 
            and <Bold><It>Bold italics text</It></Bold>
        </Text>
        <p className='text-right'>
            Hello WOrld
        </p>
        <Caption>Caption</Caption>
    </TextBlock>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    textAlignment: 'text-left'
};