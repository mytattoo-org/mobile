import { ButtonStyle, Title } from './styles'
import type { IButtonProps } from './types'

const Button = ({ title, type = 'primary', ...props }: IButtonProps) => (
  <ButtonStyle type={type} {...(props as any)}>
    <Title type={type}>{title}</Title>
  </ButtonStyle>
)

export { Button }
