import { ComponentType } from 'react'
import { FieldValues, UseFormGetValues } from 'react-hook-form'
import { ViewStyle } from 'react-native'
import { DefaultTheme } from 'styled-components/native'

import { IIconProps } from '@components/atoms/icons/types'

import { IInputProps } from '@components/molecules/Input/types'

interface IInputState {
  isFilled: boolean
  isFocused: boolean
  showPassword: boolean
}

interface IInputStyleProps {
  error?: string
  borderColor: string
}

interface ITextInputStyleProps {
  color: string
}

interface ILabelTextProps {
  color: string
}

type TGetColors = (params: {
  error: boolean
  theme: DefaultTheme
  inputState: IInputState
}) => {
  textColor: string
  iconColor: string
  labelColor: string
  borderColor: string
}

interface IUseInputParams {
  error: boolean
  icon: IFieldProps['icon']
  inputProps: IFieldProps['inputProps']
}

interface IFieldProps {
  error?: string
  label?: string
  style?: ViewStyle
  isPassword?: boolean
  inputProps: IInputProps
  passwordIconHeight?: number
  getValues: UseFormGetValues<FieldValues>
  icon?: {
    props: IIconProps
    component?: ComponentType<IIconProps>
  }
}

export type {
  TGetColors,
  IFieldProps,
  IInputState,
  IUseInputParams,
  ILabelTextProps,
  IInputStyleProps,
  ITextInputStyleProps
}
