import type { ComponentType, Reducer } from 'react'
import type { FieldValues, UseFormGetValues } from 'react-hook-form'
import type { ViewStyle } from 'react-native'
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native'
import type { TextInputProps } from 'react-native'
import type { DefaultTheme } from 'styled-components/native'

import type { IIconProps } from '@components/atoms/icons/types'

import type { IInputProps } from '@components/molecules/Input/types'

interface IFieldState {
  isFilled: boolean
  isFocused: boolean
  showPassword: boolean
}

interface IFieldSetProps {
  error?: string
  borderColor: string
}

interface ITextInputStyleProps {
  color: string
}

interface ILabelTextProps {
  color: string
}

interface IUseFieldParams {
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

interface IFieldReducerAction {
  type: 'focus' | 'blur' | 'eye'
  blur?: {
    name: string
    formValues: any
  }
}

type TGetColors = (params: {
  error: boolean
  theme: DefaultTheme
  fieldState: IFieldState
}) => {
  textColor: string
  iconColor: string
  labelColor: string
  borderColor: string
}

type TFieldReducer = Reducer<IFieldState, IFieldReducerAction>

type TOnTextInputBlur = (
  event: NativeSyntheticEvent<TextInputFocusEventData>,
  getValues: UseFormGetValues<any>
) => void

type TOnTextInputFocus = TextInputProps['onFocus']

export type {
  TGetColors,
  IFieldProps,
  IFieldState,
  TFieldReducer,
  IFieldSetProps,
  IUseFieldParams,
  ILabelTextProps,
  TOnTextInputBlur,
  TOnTextInputFocus,
  ITextInputStyleProps
}
