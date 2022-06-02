import { AxiosResponse } from 'axios'
import { Alert } from 'react-native'

import { IUserStore } from '../../types'

import { api } from '@config/api'

import {
  ISignInRequest,
  TSignInResponse
} from '@common/types/authentication/useCases/signIn.types'
import { TReadUsersResponse } from '@common/types/users/useCases/readUsers.types'

const signIn = async (data: ISignInRequest): Promise<IUserStore> => {
  try {
    const response: AxiosResponse<TSignInResponse> = await api.post(
      `/auth/sign-in`,
      data
    )

    const { id, token } = response.data

    if (id && token) {
      const response: AxiosResponse<TReadUsersResponse> = await api.get(
        `/users/${id}`
      )

      const user = response.data.user

      if (user) return { user: { token, ...user }, loading: false }
    }
  } catch (error: any) {
    error?.response?.data?.error
      ? Alert.alert('Error', error.response.data.error)
      : Alert.alert('Error', 'Error inesperado tente novamente mais tarde')
  }

  return {
    loading: false,
    user: undefined
  }
}

export default signIn
