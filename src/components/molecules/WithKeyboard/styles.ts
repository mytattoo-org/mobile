import { KeyboardAvoidingView as OriginalKAV } from 'react-native'
import { TouchableWithoutFeedback as OriginalTWF } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { IWithKeyboardProps } from './types'

import androidPaddingSafeArea from '@utils/androidPaddingSafeArea'

const KeyboardAvoidingView = styled(OriginalKAV)`
  height: 100%;
  align-items: center;
  justify-content: center;
`

const TouchableWithoutFeedback = styled(OriginalTWF)`
  height: 100%;
`

const WithKeyboardStyle = styled.SafeAreaView<IWithKeyboardProps>`
  flex: 1;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.background};

  ${androidPaddingSafeArea()}
`

export { KeyboardAvoidingView, TouchableWithoutFeedback, WithKeyboardStyle }
