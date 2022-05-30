import { useReducer } from 'react'
import { useTheme } from 'styled-components'

import type {
  TGetColors,
  IFieldState,
  TFieldReducer,
  IUseFieldParams,
  TOnTextInputBlur,
  TOnTextInputFocus
} from './types'

const useField = ({ icon, inputProps, error }: IUseFieldParams) => {
  const theme = useTheme()
  const [fieldState, dispatch] = useReducer(fieldReducer, initialState)

  const Icon = icon?.component
  const showPassword = fieldState.showPassword

  const { iconColor, borderColor, labelColor, textColor } = getColors({
    theme,
    error,
    fieldState
  })

  const onEyePress = () => {
    dispatch({ type: 'eye' })
  }

  const onTextInputFocus: TOnTextInputFocus = event => {
    const { onTextInputFocus } = inputProps

    dispatch({ type: 'focus' })
    onTextInputFocus && onTextInputFocus(event)
  }

  const onTextInputBlur: TOnTextInputBlur = (event, getValues) => {
    const { onTextInputFocus } = inputProps

    dispatch({
      type: 'blur',
      blur: { formValues: getValues(), name: inputProps.controllerProps.name }
    })

    onTextInputFocus && onTextInputFocus(event)
  }

  return {
    Icon,
    iconColor,
    textColor,
    labelColor,
    onEyePress,
    borderColor,
    showPassword,
    onTextInputBlur,
    onTextInputFocus
  }
}

const initialState: IFieldState = {
  isFilled: false,
  isFocused: false,
  showPassword: false
}

const fieldReducer: TFieldReducer = (prevState, { type, blur }) => {
  switch (type) {
    case 'focus':
      return { ...prevState, isFocused: true }

    case 'blur': {
      if (!blur) return prevState

      const isFilled = blur.formValues[blur.name]

      return {
        isFilled,
        isFocused: false,
        showPassword: prevState.showPassword
      }
    }

    case 'eye': {
      return { ...prevState, showPassword: !prevState.showPassword }
    }

    default:
      return prevState
  }
}

const getColors: TGetColors = ({
  error,
  theme,
  fieldState: { isFilled, isFocused }
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

export { useField }
