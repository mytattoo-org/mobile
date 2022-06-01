import { ControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

interface IInputStyleProps {}

interface IInputProps extends IInputStyleProps {
  textInputProps: TextInputProps
  onTextInputBlur?: TextInputProps['onBlur']
  onTextInputFocus?: TextInputProps['onFocus']
  controllerProps: Omit<ControllerProps<any>, 'render'>
}

export type { IInputProps, IInputStyleProps }
