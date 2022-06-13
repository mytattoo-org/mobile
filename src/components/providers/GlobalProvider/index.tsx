import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import type { IGlobalProviderProps } from './types'

import { store } from '@store/index'

import theme from '@styles/theme'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  </ReduxProvider>
)

export default GlobalProvider
