import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { Login } from '.';

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    msw: {
      handlers: [
        /*interceptor request*/
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'login realizado',
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Deafult: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu email'),
      'icaro@test.com'
    );
    userEvent.type(canvas.getByPlaceholderText('********'), '123456');
    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  },
};
