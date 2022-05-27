import React from 'react'

import { useInput } from './logic'
import { FieldStyle, LabelText, Label } from './styles'
import type { IFieldProps } from './types'

import Error from '@components/molecules/Error'
import Input from '@components/molecules/Input'

const Field = ({ error, label, icon, inputProps }: IFieldProps) => {
  const {
    Icon,
    textColor,
    iconColor,
    labelColor,
    borderColor,
    onTextInputBlur,
    onTextInputFocus
  } = useInput({ icon, inputProps })

  return (
    <>
      {error && <Error message={error} />}

      <FieldStyle borderColor={borderColor} error={error}>
        {Icon && <Icon color={iconColor} {...icon?.props} />}

        {label && (
          <Label>
            <LabelText color={labelColor}>{label}</LabelText>
          </Label>
        )}

        <Input
          onTextInputBlur={onTextInputBlur}
          onTextInputFocus={onTextInputFocus}
          controllerProps={inputProps.controllerProps}
          textInputProps={{
            style: { color: textColor },
            ...inputProps?.textInputProps
          }}
        />
      </FieldStyle>
    </>
  )
}

export default Field
