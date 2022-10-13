import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text = ({ size, children, asChild, className }: TextProps) => {
  const Tag = asChild ? Slot : 'span';

  return (
    <Tag
      className={
        clsx(
          'text-gray-100 font-sans',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
          }
        )
      }
    >
      {children}
    </Tag>
  )
}