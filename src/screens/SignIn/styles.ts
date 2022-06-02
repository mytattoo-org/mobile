import styled from 'styled-components/native'

import { Button } from '@components/atoms/Button'

import Field from '@components/organisms/Field'

import { androidOffsetBottom } from '@utils/androidPaddingSafeArea'

const Form = styled.View`
  align-items: center;
  width: 80%;
`

const SignInStyle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
  ${androidOffsetBottom()};
`

const SignInButton = styled(Button)`
  margin: 16px 0;
`

const UsernameOrEmail = styled(Field)`
  margin-top: 16px;
`

const Password = styled(Field)`
  margin-top: 16px;
`

export { SignInStyle, Form, UsernameOrEmail, Password, SignInButton }
