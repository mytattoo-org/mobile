import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import SignIn from '@screens/SignIn'

import { FeedTab } from '@routes/FeedTab'

const Stack = createStackNavigator()

const AuthStack = () => {
  const signedIn = false

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {signedIn ? (
        <Stack.Screen name='feedTab' component={FeedTab} />
      ) : (
        <Stack.Screen name='signIn' component={SignIn} />
      )}
    </Stack.Navigator>
  )
}

export default AuthStack
