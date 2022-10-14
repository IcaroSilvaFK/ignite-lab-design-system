import { Meta, StoryObj } from '@storybook/react';
import { CheckBox, ICheckBoxProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text size='sm'>Lembrar-me de min por 30 dias</Text>
      </div>
    ),
  ],
} as Meta<ICheckBoxProps>;

export const Default: StoryObj<ICheckBoxProps> = {};
