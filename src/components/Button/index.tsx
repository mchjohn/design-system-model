import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={
        clsx(
          `
            py-4 px-3
            bg-cyan-500
            rounded
            font-semibold text-gray-900 text-sm
            w-full
            transition-colors hover:bg-cyan-400
            focus:ring-2 ring-gray-100`,
        )
      }
    >
      {children}
    </Tag>
  )
}