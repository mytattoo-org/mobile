import React from 'react'
import { Controller } from 'react-hook-form'

import { useInput } from './logic'
import { InputStyle, LabelText, TextInput, Label } from './styles'
import type { IInputProps } from './types'

import Error from '@components/molecules/Error'

const Input = ({
  error,
  label,
  iconProps,
  inputProps,
  controllerProps
}: IInputProps) => {
  const {
    Icon,
    textColor,
    iconColor,
    labelColor,
    borderColor,
    onTextInputBlur,
    onTextInputFocus
  } = useInput({ iconProps })

  return (
    <>
      {error && <Error message={error} />}

      <InputStyle borderColor={borderColor} error={error}>
        {Icon && <Icon color={iconColor} {...iconProps?.props} />}

        {label && (
          <Label>
            <LabelText color={labelColor}>{label}</LabelText>
          </Label>
        )}

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
