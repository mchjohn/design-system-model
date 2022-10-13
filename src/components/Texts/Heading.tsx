import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Heading = ({ size, children, asChild }: HeadingProps) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={
        clsx(
          'text-gray-100 font-bold font-sans',
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
          }
        )
      }
    >
      {children}
    </Tag>
  )
}