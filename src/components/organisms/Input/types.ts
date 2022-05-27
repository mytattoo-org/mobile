import { ComponentType } from 'react'
import { ControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { DefaultTheme } from 'styled-components/native'

import { IIconProps } from '@components/atoms/icons/types'

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

interface IInputProps {
  error?: string
  label?: string
  inputProps: TextInputProps
  controllerProps: Omit<ControllerProps, 'render'>
  iconProps?: {
    props: IIconProps
    component?: ComponentType<IIconProps>
  }
}

interface IUseInputParams {
  iconProps: IInputProps['iconProps']
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

export type {
  TGetColors,
  IInputProps,
  IInputState,
  IUseInputParams,
  ILabelTextProps,
  IInputStyleProps,
  ITextInputStyleProps
}
