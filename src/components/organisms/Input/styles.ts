import { darken } from 'polished'
import { TextInputProps } from 'react-native'
import { TextInput as OriginalTextInput } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

import type { IInputStyleProps, ITextInputStyleProps } from './types'

const TextInput = styled(OriginalTextInput).attrs(
  ({ theme }) =>
    ({
      placeholderTextColor: darken(0.6, theme.colors.secondary)
    } as TextInputProps)
)<ITextInputStyleProps>`
  flex: 1;
  font-size: 20px;
  margin-left: 16px;

  color: ${({ color }) => color};
`

const InputStyle = styled.View<IInputStyleProps>`
  align-items: center;
  flex-direction: row;

  width: 100%;

  padding: 8px;
  border-radius: 8px;

  border: solid 1px
    ${({ theme, inputState }) =>
      inputState.isFocused ? theme.colors.primary : theme.colors.secondary};

  ${({ error }) =>
    error &&
    css`
      margin-top: 8px;
    `};
`

export { InputStyle, TextInput }
