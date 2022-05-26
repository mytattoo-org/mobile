import type { IGlobalProviderProps } from './types'

import theme from '@styles/theme'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
)

export default GlobalProvider
