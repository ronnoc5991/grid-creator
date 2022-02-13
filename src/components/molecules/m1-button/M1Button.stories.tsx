import type { Meta } from '@storybook/react';

import M1Button from './M1Button';
import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';

export default {
  title: 'M1Button',
  component: M1Button,
  decorators: [globalStoreDecorator],
} as Meta;

const Template = createTemplate(M1Button);

export const Default = Template.bind({});
Default.args = {};
