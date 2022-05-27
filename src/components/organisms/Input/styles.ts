import { darken } from 'polished'
import { TextInputProps } from 'react-native'
import { TextInput as OriginalTextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

import {
  IInputStyleProps,
  ILabelTextProps,
  ITextInputStyleProps
} from './types'

const LabelText = styled.Text<ILabelTextProps>`
  font-size: ${RFValue(16)}px;

  color: ${({ color }) => color};
`

const Label = styled.View`
  position: absolute;
  top: -16;
  left: 0;
  z-index: -1;

  padding: 4px 8px;
  margin-left: 16px;

  background-color: ${({ theme }) => theme.colors.background};
`

const TextInput = styled(OriginalTextInput)<ITextInputStyleProps>`
  flex: 1;
  font-size: ${RFValue(17)}px;
  margin-left: 16px;

  color: ${({ color }) => color};
`

const InputStyle = styled.View<IInputStyleProps>`
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
      margin-top: 8px;
    `};
`

export { InputStyle, TextInput, Label, LabelText }
