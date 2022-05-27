import { ComponentType } from 'react'
import { ControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { IIconProps } from '@components/atoms/icons/types'

interface IInputState {
  isFilled: boolean
  isFocused: boolean
}

interface IInputStyleProps {
  error?: string
  inputState: IInputState
}

interface ITextInputStyleProps {
  color: string
}

interface IInputProps {
  error?: string
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

export type {
  IInputProps,
  IInputState,
  IUseInputParams,
  IInputStyleProps,
  ITextInputStyleProps
}
