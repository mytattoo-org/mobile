import { useState } from 'react'
import { useTheme } from 'styled-components'

import type { IInputState, IUseInputParams, TGetColors } from './types'

import { IInputProps } from '@components/molecules/Input/types'

const useInput = ({ icon, inputProps }: IUseInputParams) => {
  const theme = useTheme()
  const [inputState, setInputState] = useState<IInputState>({
    isFilled: false,
    isFocused: false
  })

  const { iconColor, borderColor, labelColor, textColor } = getColors(
    theme,
    inputState
  )

  const Icon = icon?.component

  const onTextInputFocus: IInputProps['onTextInputFocus'] = event => {
    setInputState(prev => ({ ...prev, isFocused: true }))
    inputProps?.onTextInputFocus && inputProps.onTextInputFocus(event)
  }

  const onTextInputBlur: IInputProps['onTextInputBlur'] = event => {
    setInputState(prev => ({ ...prev, isFocused: false }))
    inputProps?.onTextInputFocus && inputProps.onTextInputFocus(event)
  }

  return {
    Icon,
    iconColor,
    textColor,
    labelColor,
    borderColor,
    onTextInputBlur,
    onTextInputFocus
  }
}

const getColors: TGetColors = (theme, { isFilled, isFocused }) => {
  const filledColor = isFilled ? theme.colors.primary : theme.colors.secondary
  const focusedColor = isFocused ? theme.colors.primary : theme.colors.secondary
  const filledOrFocusedColor =
    isFilled || isFocused ? theme.colors.primary : theme.colors.secondary

  const textColor = filledColor
  const labelColor = focusedColor
  const borderColor = focusedColor
  const iconColor = filledOrFocusedColor

  return { textColor, labelColor, borderColor, iconColor }
}

export { useInput }
