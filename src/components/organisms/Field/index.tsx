import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useInput } from './logic'
import { FieldStyle, LabelText, Label, FieldSet } from './styles'
import type { IFieldProps } from './types'

import ClosedEye from '@components/atoms/icons/ClosedEye'
import Eye from '@components/atoms/icons/Eye'

import Error from '@components/molecules/Error'
import Input from '@components/molecules/Input'

const Field = ({
  icon,
  label,
  style,
  error,
  getValues,
  inputProps,
  isPassword = false,
  passwordIconHeight = 24
}: IFieldProps) => {
  const {
    Icon,
    textColor,
    iconColor,
    labelColor,
    onEyeClick,
    borderColor,
    showPassword,
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
            secureTextEntry: showPassword,
            ...inputProps?.textInputProps
          }}
        />

        {isPassword &&
          (showPassword ? (
            <TouchableOpacity onPress={onEyeClick}>
              <Eye color={iconColor} height={passwordIconHeight} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onEyeClick}>
              <ClosedEye color={iconColor} height={passwordIconHeight} />
            </TouchableOpacity>
          ))}
      </FieldSet>
    </FieldStyle>
  )
}

export default Field