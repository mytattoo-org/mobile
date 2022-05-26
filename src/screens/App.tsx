import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'

import GlobalProvider from '@components/providers/GlobalProvider'

import AuthStack from '@routes/AuthStack'

const App = () => (
  <GlobalProvider>
    <AuthStack />

    <StatusBar style='light' />
  </GlobalProvider>
)

export default registerRootComponent(App)
