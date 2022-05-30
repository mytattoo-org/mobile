import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FieldValues } from 'react-hook-form'

import { signInYupSchema } from './schemas'

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

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return { control, onSubmit, errors, handleSubmit, getValues }
}

export { useSignIn }
