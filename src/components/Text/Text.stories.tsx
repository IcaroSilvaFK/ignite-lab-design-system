import { Meta, StoryObj } from '@storybook/react';

import { ITextProps, Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Jhom Doe',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>;

export const small: StoryObj<ITextProps> = {
  args: {
    size: 'sm',
  },
};

export const medium: StoryObj<ITextProps> = {
  args: {
    size: 'md',
  },
};
export const large: StoryObj<ITextProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    size: 'lg',
    as: true,
    children: <p>Text with p</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
};
