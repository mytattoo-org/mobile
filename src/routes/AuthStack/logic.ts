import useAppSelector from '@hooks/useAppSelector'

const useAuthStack = () => {
  const userStore = useAppSelector(({ user }) => user)

  return { signedIn: !!userStore.user?.id }
}

export { useAuthStack }
