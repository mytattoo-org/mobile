import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import { IInputStyleProps, ILabelTextProps } from './types'

const LabelText = styled.Text<ILabelTextProps>`
  font-size: ${RFValue(16)}px;

  color: ${({ color }) => color};
`

const Label = styled.View`
  position: absolute;
  top: -16px;
  left: 0;

  padding: 4px 8px;
  margin-left: 16px;

  background-color: ${({ theme }) => theme.colors.background};
`

const FieldSet = styled.View<IInputStyleProps>`
  position: relative;

  align-items: center;
  flex-direction: row;

  width: 100%;

  padding: 12px;
  border-radius: 8px;

  border: solid 1px ${({ borderColor }) => borderColor};

  ${({ error }) =>
    error &&
    css`
      margin-top: 16px;
    `};
`

const FieldStyle = styled.View``

export { FieldStyle, Label, LabelText, FieldSet }
