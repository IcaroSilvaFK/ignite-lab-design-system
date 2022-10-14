import { Meta, StoryObj } from '@storybook/react';

import { Heading, IHeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {};
export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};
export const Medium: StoryObj<IHeadingProps> = {
  args: {
    size: 'md',
    children: 'Medium',
  },
};
export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    size: 'sm',
    children: <h1>Heading with h1</h1>,
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
