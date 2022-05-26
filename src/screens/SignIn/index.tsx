import { SignInStyle, Form } from './styles'

import Input from '@components/molecules/Input'
import WithKeyboard from '@components/molecules/WithKeyboard'

const SignIn = () => {
  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <Input autoCapitalize='none' keyboardType='email-address' />
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
