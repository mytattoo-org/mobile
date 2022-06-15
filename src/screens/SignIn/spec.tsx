import SignIn from '.'
import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import GlobalProvider from '../../components/providers/GlobalProvider'

describe('Sign In', () => {
  it('Should be able to change values of inputs', async () => {
    const { queryAllByA11yLabel } = render(
      <GlobalProvider>
        <SignIn />
      </GlobalProvider>
    )

    const components = queryAllByA11yLabel(
      /(Sign in form)|(Username or e-mail)|(Password)|(Sign in button)/
    )

    const signIn = {
      form: components[0],
      submit: components[3],
      password: components[2],
      usernameOrEmail: components[1]
    }

    await act(async () => {
      fireEvent.changeText(signIn.usernameOrEmail, 'InSTinToS')
      fireEvent.changeText(signIn.password, 'Miguel@1234')
    })

    expect(signIn.usernameOrEmail.props.value).toBe('InSTinToS')
    expect(signIn.password.props.value).toBe('Miguel@1234')
  })
})
