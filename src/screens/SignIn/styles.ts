import styled from 'styled-components/native'

import Field from '@components/organisms/Field'

const Form = styled.View`
  width: 80%;
`

const SignInStyle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
`

const UsernameOrEmail = styled(Field)``

const Password = styled(Field)`
  margin-top: 16px;
`

export { SignInStyle, Form, UsernameOrEmail, Password }
