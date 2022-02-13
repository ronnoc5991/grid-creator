import type { Meta } from '@storybook/react';

import O3Row from './O3Row';
import { createTemplate } from '../../../storybook-helpers/stories';
import { globalStoreDecorator } from '../../../storybook-helpers/decorators';

export default {
  title: 'O3Row',
  component: O3Row,
  decorators: [globalStoreDecorator],
} as Meta;

const Template = createTemplate(O3Row);

export const Default = Template.bind({});
Default.args = {};
