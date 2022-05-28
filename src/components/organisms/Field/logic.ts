import { useState } from 'react'
import { useTheme } from 'styled-components'

import type { IInputState, IUseInputParams, TGetColors } from './types'

import { IInputProps } from '@components/molecules/Input/types'

const useInput = ({ icon, inputProps, error }: IUseInputParams) => {
  const theme = useTheme()
  const [inputState, setInputState] = useState<IInputState>({
    isFilled: false,
    isFocused: false
  })

  const { iconColor, borderColor, labelColor, textColor } = getColors({
    theme,
    error,
    inputState
  })

  const Icon = icon?.component

  const onTextInputFocus: IInputProps['onTextInputFocus'] = event => {
    setInputState(prev => ({ ...prev, isFocused: true }))
    inputProps?.onTextInputFocus && inputProps.onTextInputFocus(event)
  }

  const onTextInputBlur = (event: any, getValues: any) => {
    setInputState({
      isFocused: false,
      isFilled: !!getValues()[inputProps.controllerProps.name]
    })

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

const getColors: TGetColors = ({
  error,
  theme,
  inputState: { isFilled, isFocused }
}) => {
  const filledColor = isFilled ? theme.colors.primary : theme.colors.secondary
  const focusedColor = isFocused ? theme.colors.primary : theme.colors.secondary
  const filledOrFocusedColor =
    isFilled || isFocused ? theme.colors.primary : theme.colors.secondary

  const textColor = error ? theme.colors.red : filledColor
  const labelColor = error ? theme.colors.red : focusedColor
  const borderColor = error ? theme.colors.red : focusedColor
  const iconColor = error ? theme.colors.red : filledOrFocusedColor

  return { textColor, labelColor, borderColor, iconColor }
}

export { useInput }
