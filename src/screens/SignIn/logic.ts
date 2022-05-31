import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosResponse } from 'axios'
import { useForm, FieldValues } from 'react-hook-form'
import { Alert } from 'react-native'

import { signInYupSchema } from './schemas'

import { api } from '@config/api'

import { TSignInResponse } from '@common/types/authentication/useCases/signIn.types'

const useSignIn = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(signInYupSchema),
    defaultValues: { usernameOrEmail: '', password: '' }
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log('submit')
      const response: AxiosResponse<TSignInResponse> = await api.post(
        '/auth/sign-in',
        data
      )

      console.log(response.data.id, response.data.token)
    } catch (error: any) {
      if (error?.response?.data?.error)
        Alert.alert('Falha', error.response.data.error)
      else Alert.alert('Falha', 'Error inesperado tente novamente mais tarde')
    }
  }

  return { control, onSubmit, errors, handleSubmit, getValues }
}

export { useSignIn }
