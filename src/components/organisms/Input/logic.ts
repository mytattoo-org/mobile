import { useState } from 'react'
import { useTheme } from 'styled-components'

import type { IInputState, IUseInputParams, TGetColors } from './types'

const useInput = ({ iconProps }: IUseInputParams) => {
  const theme = useTheme()
  const [inputState, setInputState] = useState<IInputState>({
    isFilled: false,
    isFocused: false
  })

  const { iconColor, borderColor, labelColor, textColor } = getColors(
    theme,
    inputState
  )

  const Icon = iconProps?.component

  const onTextInputFocus = () => {
    setInputState(prev => ({ ...prev, isFocused: true }))
  }

  const onTextInputBlur = () => {
    setInputState(prev => ({ ...prev, isFocused: false }))
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
