import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  as?: boolean;
  className?: string;
}

export function Text({ as, size = 'md', children, className }: ITextProps) {
  const Comp = as ? Slot : 'span';
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
