import { InputStyle, TextInput } from './styles'
import type { IInputProps } from './types'

const Input = ({
  controllerProps,
  textInputProps,
  onTextInputBlur,
  onTextInputFocus
}: IInputProps) => {
  return (
    <InputStyle
      name={controllerProps.name}
      control={controllerProps.control}
      render={({ field: { onBlur, onChange, value } }) => (
        <TextInput
          value={value}
          onFocus={onTextInputFocus}
          onChangeText={value => onChange(value)}
          onBlur={event => {
            onBlur()
            onTextInputBlur && onTextInputBlur(event)
          }}
          {...textInputProps}
        />
      )}
    />
  )
}

export default Input
