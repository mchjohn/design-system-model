import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className={`
      flex items-center gap-3
      py-4 px-3 w-full h-12
      rounded
      bg-gray-800
      focus-within:ring-2 ring-gray-200
    `}>
      {children}
    </div>
  )
}

export interface TextInputIconRootProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconRootProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      {...props}
      className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400'
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}