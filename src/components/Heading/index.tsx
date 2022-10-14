import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface IHeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  as?: boolean;
  className?: string;
}

export function Heading({
  as,
  size = 'md',
  children,
  className,
}: IHeadingProps) {
  const Comp = as ? Slot : 'h2';
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
