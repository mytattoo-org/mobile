import { Controller } from 'react-hook-form'

import { useInput } from './logic'
import { InputStyle, TextInput } from './styles'
import type { IInputProps } from './types'

import Heart from '@components/atoms/icons/Heart'

import Error from '@components/molecules/Error'

const Input = ({ controllerProps, inputProps, error }: IInputProps) => {
  const {
    iconColor,
    textColor,
    inputState,
    onTextInputBlur,
    onTextInputFocus
  } = useInput()

  return (
    <>
      {error && <Error message={error} />}

      <InputStyle inputState={inputState} error={error}>
        <Heart color={iconColor} />

        <Controller
          name={controllerProps.name}
          control={controllerProps.control}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              value={value}
              color={textColor}
              onChangeText={onChange}
              onFocus={onTextInputFocus}
              onBlur={() => {
                onBlur()
                onTextInputBlur()
              }}
              {...inputProps}
            />
          )}
        />
      </InputStyle>
    </>
  )
}

export default Input
