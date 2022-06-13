import { useSignIn } from './logic'
import {
  SignInStyle,
  Form,
  UsernameOrEmail,
  Password,
  SignInButton
} from './styles'

import { Button } from '@components/atoms/Button'
import User from '@components/atoms/svg/icons/User'
import { Logo } from '@components/atoms/svg/images/Logo'

import WithKeyboard from '@components/molecules/WithKeyboard'

const SignIn = () => {
  const { control, errors, onSubmit, handleSubmit, getValues, theme } =
    useSignIn()

  return (
    <WithKeyboard>
      <SignInStyle>
        <Form>
          <Logo color={theme.colors.primary} height={120} />

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
            passwordIconHeight={28}
            error={errors.password?.message}
            icon={{ component: User, props: { height: 24 } }}
            inputProps={{
              controllerProps: { control, name: 'password' },
              textInputProps: { autoCapitalize: 'none' }
            }}
          />

          <SignInButton onPress={handleSubmit(onSubmit)} title='Entrar' />

          <Button
            type='secondary'
            title='Cadastrar'
            onPress={handleSubmit(onSubmit)}
          />
        </Form>
      </SignInStyle>
    </WithKeyboard>
  )
}

export default SignIn
