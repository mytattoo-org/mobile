import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FieldValues } from 'react-hook-form'

import { signInYupSchema } from './schemas'

const useSignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(signInYupSchema),
    defaultValues: {
      usernameOrEmail: '',
      password: ''
    }
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return { control, onSubmit, errors }
}

export { useSignIn }
