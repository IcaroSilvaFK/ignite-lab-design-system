import { Meta, StoryObj } from '@storybook/react';
import { TextInput, IInputInputProps, TextInputRootProps } from '.';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon children={<Envelope />} />
        <TextInput.Input placeholder='Type your email address' />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your email address' />,
  },
};
