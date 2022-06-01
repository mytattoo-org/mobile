import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'remote-redux-devtools'

import { user } from './user'

const store = configureStore({
  reducer: { user: user.reducer },
  enhancers: [devToolsEnhancer()]
})

export { store }
