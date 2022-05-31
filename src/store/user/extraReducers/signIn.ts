import axios from 'axios'

const signIn = async ({ id }: any) => {
  const { data }: any = await axios.get(`api/users/${id}`)

  const { success, user } = data

  if (success) return user
  return null
}

export default signIn
