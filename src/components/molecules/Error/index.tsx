import { ErrorStyle, Message } from './styles'
import type { IErrorProps } from './types'

import Alert from '@components/atoms/images/icons/Alert'

const Error = ({ message }: IErrorProps) => {
  return (
    <ErrorStyle>
      <Alert height={22} />

      <Message>{message}</Message>
    </ErrorStyle>
  )
}

export default Error
