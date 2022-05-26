import { FieldValues } from 'react-hook-form'

interface ISignInValues extends FieldValues {
  password: string
  usernameOrEmail: string
}

export type { ISignInValues }
