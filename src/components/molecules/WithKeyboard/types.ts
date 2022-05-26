import { ReactNode } from 'react'
import {
  KeyboardAvoidingViewProps,
  TouchableWithoutFeedbackProps
} from 'react-native'

interface IWithKeyboardStyle {
  backgroundColor?: string
}

interface IWithKeyboardProps extends IWithKeyboardStyle {
  children: ReactNode
  keyboardProps?: KeyboardAvoidingViewProps
  touchableProps?: TouchableWithoutFeedbackProps
}

export type { IWithKeyboardProps, IWithKeyboardStyle }
