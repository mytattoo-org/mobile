import { ComponentType } from 'react'
import { DefaultTheme } from 'styled-components/native'

import { IIconProps } from '@components/atoms/icons/types'

import { IInputProps } from '@components/molecules/Input/types'

interface IInputState {
  isFilled: boolean
  isFocused: boolean
}

interface IInputStyleProps {
  error?: string
  borderColor: string
}

interface ITextInputStyleProps {
  color: string
}

interface IUseInputParams {
  icon: IFieldProps['icon']
  inputProps: IFieldProps['inputProps']
}

interface ILabelTextProps {
  color: string
}

type TGetColors = (
  theme: DefaultTheme,
  inputState: IInputState
) => {
  borderColor: string
  labelColor: string
  textColor: string
  iconColor: string
}

interface IFieldProps {
  error?: string
  label?: string
  inputProps: IInputProps
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
