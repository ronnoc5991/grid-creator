import type { Meta } from '@storybook/react';

import O2Grid from './O2Grid';
import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';

export default {
  title: 'O2Grid',
  component: O2Grid,
  decorators: [globalStoreDecorator],
} as Meta;

const Template = createTemplate(O2Grid);

export const Default = Template.bind({});
Default.args = {};
