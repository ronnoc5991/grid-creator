import type { Meta } from '@storybook/react';

import O1Counter from './O1Counter';
import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';

export default {
  title: 'O1Counter',
  component: O1Counter,
  decorators: [globalStoreDecorator],
} as Meta;

const Template = createTemplate(O1Counter);

export const Default = Template.bind({});
Default.args = {};
