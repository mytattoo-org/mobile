import { Controller } from 'react-hook-form'

import { useInput } from './logic'
import { InputStyle, TextInput } from './styles'
import type { IInputProps } from './types'

import Error from '@components/molecules/Error'

const Input = ({
  error,
  iconProps,
  inputProps,
  controllerProps
}: IInputProps) => {
  const { textColor, inputState, onTextInputBlur, onTextInputFocus, Icon } =
    useInput({ iconProps })

  return (
    <>
      {error && <Error message={error} />}

      <InputStyle inputState={inputState} error={error}>
        {Icon}

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
