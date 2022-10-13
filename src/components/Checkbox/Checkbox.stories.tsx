import { Meta, StoryObj} from '@storybook/react'

import { Text } from '../Texts';
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Checkbox example</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};