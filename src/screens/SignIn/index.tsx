import { Button } from 'react-native'

import { useSignIn } from './logic'
import { SignInStyle, Form } from './styles'

import WithKeyboard from '@components/molecules/WithKeyboard'

import Input from '@components/organisms/Input'

const SignIn = () => {
  const { control, errors, onSubmit } = useSignIn()

  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <Input
            error={errors.usernameOrEmail?.message}
            controllerProps={{
              control,
              name: 'usernameOrEmail'
            }}
            inputProps={{
              autoCapitalize: 'none',
              keyboardType: 'email-address',
              placeholder: 'Nome de usuário'
            }}
          />

          <Button onPress={onSubmit} title='Entrar' />
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
