import { Button, View } from 'react-native'

import { useSignIn } from './logic'
import { SignInStyle, Form, UsernameOrEmail, Password } from './styles'

import User from '@components/atoms/icons/User'

import WithKeyboard from '@components/molecules/WithKeyboard'

const SignIn = () => {
  const { control, errors, onSubmit, handleSubmit, getValues } = useSignIn()

  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <UsernameOrEmail
            getValues={getValues}
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

          <Password
            isPassword
            label='Senha'
            getValues={getValues}
            error={errors.password?.message}
            icon={{ component: User, props: { height: 24 } }}
            inputProps={{
              controllerProps: { control, name: 'password' },
              textInputProps: { autoCapitalize: 'none' }
            }}
          />

          <View style={{ marginTop: 16 }}>
            <Button onPress={handleSubmit(onSubmit)} title='Entrar' />
          </View>
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
