import { TypedUseSelectorHook } from 'react-redux'

import { TStoreState } from '@typescript/redux.types'

type TUseAppSelector = TypedUseSelectorHook<TStoreState>

export type { TUseAppSelector }
