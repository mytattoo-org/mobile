import { ThemeProvider } from 'styled-components'
import Home from './src/screens/Home'
import theme from './src/styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

export default App
