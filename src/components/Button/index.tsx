import { clsx } from 'clsx';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild, className, ...props  }: ButtonProps) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={
        clsx(
          `
            py-3 px-4
            bg-cyan-500
            rounded
            font-semibold text-gray-900 text-sm
            w-full
            transition-colors hover:bg-cyan-400
            focus:ring-2 ring-gray-100`,
            className,
        )
      }
      {...props}
    >
      {children}
    </Tag>
  )
}