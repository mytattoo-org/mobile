import { Keyboard, Platform } from 'react-native'

import {
  WithKeyboardStyle,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from './styles'
import type { IWithKeyboardProps } from './types'

const WithKeyboard = ({
  children,
  keyboardProps,
  touchableProps,
  backgroundColor
}: IWithKeyboardProps) => {
  return (
    <WithKeyboardStyle backgroundColor={backgroundColor}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        {...(touchableProps as any)}
      >
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          {...keyboardProps}
        >
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </WithKeyboardStyle>
  )
}

export default WithKeyboard
