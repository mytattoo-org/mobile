import { useState } from 'react'
import { useTheme } from 'styled-components'

import type { IInputState, IUseInputParams } from './types'

const useInput = ({ iconProps }: IUseInputParams) => {
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

  const IconComponent = iconProps?.component

  const Icon = IconComponent ? (
    <IconComponent color={iconColor} {...iconProps.props} />
  ) : (
    <></>
  )

  const onTextInputFocus = () => {
    setInputState(prev => ({ ...prev, isFocused: true }))
  }

  const onTextInputBlur = () => {
    setInputState(prev => ({ ...prev, isFocused: false }))
  }

  return {
    Icon,
    textColor,
    inputState,
    onTextInputBlur,
    onTextInputFocus
  }
}

export { useInput }
