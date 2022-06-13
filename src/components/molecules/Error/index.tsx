import { useTheme } from 'styled-components/native'

import { ErrorStyle, Message } from './styles'
import type { IErrorProps } from './types'

import Alert from '@components/atoms/svg/icons/Alert'

const Error = ({ message }: IErrorProps) => {
  const theme = useTheme()

  return (
    <ErrorStyle>
      <Alert height={24} color={theme.colors.secondary} />

      <Message>{message}</Message>
    </ErrorStyle>
  )
}

export default Error
