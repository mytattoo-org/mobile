import styled from 'styled-components/native'

const Style = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`

const Title = styled.Text`
  font-size: 24px;

  color: ${({ theme }) => theme.colors.primary};
`

export { Style, Title }
