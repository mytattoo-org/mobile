import { ControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

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
}

export type { IInputProps, IInputStyleProps, IInputState, ITextInputStyleProps }
