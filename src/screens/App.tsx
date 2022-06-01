// import reduxDevTools from '@redux-devtools/cli'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'

import GlobalProvider from '@components/providers/GlobalProvider'

import AuthStack from '@routes/AuthStack'

// reduxDevTools({ hostname: 'localhost', port: 8000 })

const App = () => (
  <GlobalProvider>
    <AuthStack />

    <StatusBar style='light' />
  </GlobalProvider>
)
export default registerRootComponent(App)
