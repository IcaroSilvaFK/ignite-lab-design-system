import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  size,
  asChild,
  className,
  ...rest
}: IButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition focus:ring-2 ring-white',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
