import { Button } from 'react-native'

import { useSignIn } from './logic'
import { SignInStyle, Form } from './styles'

import User from '@components/atoms/icons/User'

import WithKeyboard from '@components/molecules/WithKeyboard'

import Input from '@components/organisms/Input'

const SignIn = () => {
  const { control, errors, onSubmit } = useSignIn()

  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <Input
            label='Nome de usuário ou e-mail'
            error={errors.usernameOrEmail?.message}
            controllerProps={{ control, name: 'usernameOrEmail' }}
            iconProps={{ component: User, props: { height: 24 } }}
            inputProps={{
              autoCapitalize: 'none',
              keyboardType: 'email-address'
            }}
          />

          <Button onPress={onSubmit} title='Entrar' />
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
