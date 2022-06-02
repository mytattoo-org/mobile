import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { ISignInValues } from './types'

import { signInYupSchema } from './schemas'

import useAppDispatch from '@hooks/useAppDispatch'

import { signInThunk } from '@store/user/extraReducers/signIn'

const useSignIn = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignInValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(signInYupSchema),
    defaultValues: { usernameOrEmail: '', password: '' }
  })

  const onSubmit = async (data: ISignInValues) => {
    await dispatch(signInThunk(data))
  }

  return { control, onSubmit, errors, handleSubmit, getValues, theme }
}

export { useSignIn }
