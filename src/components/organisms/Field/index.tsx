import React from 'react'

import { useInput } from './logic'
import { FieldStyle, LabelText, Label, FieldSet } from './styles'
import type { IFieldProps } from './types'

import Error from '@components/molecules/Error'
import Input from '@components/molecules/Input'

const Field = ({
  icon,
  label,
  style,
  error,
  getValues,
  inputProps
}: IFieldProps) => {
  const {
    Icon,
    textColor,
    iconColor,
    labelColor,
    borderColor,
    onTextInputBlur,
    onTextInputFocus
  } = useInput({ icon, inputProps, error: !!error })

  return (
    <FieldStyle style={style}>
      {error && <Error message={error} />}

      <FieldSet borderColor={borderColor} error={error}>
        {Icon && <Icon color={iconColor} {...icon?.props} />}

        {label && (
          <Label>
            <LabelText color={labelColor}>{label}</LabelText>
          </Label>
        )}

        <Input
          onTextInputBlur={e => onTextInputBlur(e, getValues)}
          onTextInputFocus={onTextInputFocus}
          controllerProps={inputProps.controllerProps}
          textInputProps={{
            style: { color: textColor },
            ...inputProps?.textInputProps
          }}
        />
      </FieldSet>
    </FieldStyle>
  )
}

export default Field
