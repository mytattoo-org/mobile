import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import type { IErrorStyleProps } from './types'

const ErrorStyle = styled.View<IErrorStyleProps>`
  position: relative;
  z-index: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.red};
`

const Message = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.secondary};
`

export { ErrorStyle, Message }
