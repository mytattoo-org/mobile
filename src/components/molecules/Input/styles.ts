import { TextInput as OriginalTextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import type { IInputStyleProps } from './types'

const TextInput = styled(OriginalTextInput)`
  flex: 1;
  font-size: 18px;
  margin-left: 16px;

  color: ${({ theme }) => theme.colors.secondary};
`

const InputStyle = styled.View<IInputStyleProps>`
  align-items: center;
  flex-direction: row;

  width: 100%;
  padding: 8px;
  border-radius: 8px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};
`

export { InputStyle, TextInput }
