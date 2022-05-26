import { useState } from 'react'
import { useTheme } from 'styled-components'

import { IInputState } from './types'

const useInput = () => {
  const theme = useTheme()
  const [inputState, setInputState] = useState<IInputState>({
    isFilled: false,
    isFocused: false
  })

  const iconColor =
    inputState.isFilled || inputState.isFocused
      ? theme.colors.primary
      : theme.colors.secondary

  const textColor = inputState.isFilled
    ? theme.colors.primary
    : theme.colors.secondary

  const onTextInputFocus = () => {
    setInputState(prev => ({ ...prev, isFocused: true }))
  }

  const onTextInputBlur = () => {
    setInputState(prev => ({ ...prev, isFocused: false }))
  }

  return { inputState, iconColor, textColor, onTextInputBlur, onTextInputFocus }
}

export { useInput }
