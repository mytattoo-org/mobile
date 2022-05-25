import Feed from '@screens/Feed'

import theme from '@styles/theme'

import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <Feed />
  </ThemeProvider>
)

export default registerRootComponent(App)
