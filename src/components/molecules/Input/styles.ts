import { Controller } from 'react-hook-form'
import { TextInput as OriginalTextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const InputStyle = styled(Controller)``

const TextInput = styled(OriginalTextInput)`
  flex: 1;

  font-size: ${RFValue(17)}px;

  margin-left: 16px;
`

export { InputStyle, TextInput }
