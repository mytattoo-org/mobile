import GlobalProvider from '@components/providers/GlobalProvider'

import { FeedTab } from '@routes/FeedTab'

import { registerRootComponent } from 'expo'

const App = () => (
  <GlobalProvider>
    <FeedTab />
  </GlobalProvider>
)

export default registerRootComponent(App)
