import { Button } from 'react-native'

import { useSignIn } from './logic'
import { SignInStyle, Form } from './styles'

import User from '@components/atoms/icons/User'

import WithKeyboard from '@components/molecules/WithKeyboard'

import Field from '@components/organisms/Field'

const SignIn = () => {
  const { control, errors, onSubmit } = useSignIn()

  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <Field
            label='Nome de usuário ou e-mail'
            error={errors.usernameOrEmail?.message}
            icon={{ component: User, props: { height: 24 } }}
            inputProps={{
              controllerProps: { control, name: 'usernameOrEmail' },
              textInputProps: {
                autoCapitalize: 'none',
                keyboardType: 'email-address'
              }
            }}
          />

          <Button onPress={onSubmit} title='Entrar' />
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
