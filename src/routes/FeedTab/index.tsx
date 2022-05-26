import { useFeedTab } from './logic'

import Feed from '@screens/Feed'
import Filters from '@screens/Filters'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const Tab = createBottomTabNavigator()

export const FeedTab = () => {
  const { navigatorScreenOptions, feedOptions, filtersOptions } = useFeedTab()

  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name='Feed' component={Feed} options={feedOptions} />

      <Tab.Screen name='Filters' component={Filters} options={filtersOptions} />
    </Tab.Navigator>
  )
}
