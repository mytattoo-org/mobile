import { useDispatch } from 'react-redux'

import { TStoreDispatch } from '@typescript/redux.types'

const useAppDispatch = () => useDispatch<TStoreDispatch>()

export default useAppDispatch
