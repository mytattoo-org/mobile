import { InputStyle, TextInput } from './styles'
import type { IInputProps } from './types'

import Heart from '@components/atoms/icons/Heart'

const Input = (props: IInputProps) => {
  return (
    <InputStyle>
      <Heart />

      <TextInput {...props} />
    </InputStyle>
  )
}

export default Input
