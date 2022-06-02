import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import type { ITypeProp } from './types'

const Title = styled.Text<ITypeProp>`
  font-weight: 700;
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.secondary};
`

const ButtonStyle = styled.Pressable<ITypeProp>`
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 10px 0;
  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export { ButtonStyle, Title }
