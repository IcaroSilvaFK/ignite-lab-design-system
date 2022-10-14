import { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='py-4 px-3 h-12 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300 outline-none flex items-center gap-3'>
      {children}
    </div>
  );
}

export interface TetInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TetInputIconProps) {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
}

export interface IInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...rest }: IInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...rest}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
