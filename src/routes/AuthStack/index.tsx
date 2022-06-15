import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { useAuthStack } from './logic'

import SignIn from '@screens/SignIn'

import { FeedTab } from '@routes/FeedTab'

const Stack = createStackNavigator()

const AuthStack = () => {
  const { signedIn } = useAuthStack()

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
