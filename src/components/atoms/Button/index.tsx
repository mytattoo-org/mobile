import { ButtonStyle, Title } from './styles'
import type { IButtonProps } from './types'

const Button = ({ title, ...props }: IButtonProps) => {
  return (
    <ButtonStyle {...(props as any)}>
      <Title>{title}</Title>
    </ButtonStyle>
  )
}

export { Button }
