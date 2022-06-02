import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { darken } from 'polished'
import { useTheme } from 'styled-components'

import FeedIcon from '@components/atoms/images/icons/Feed'
import Tattoo from '@components/atoms/images/icons/Tattoo'

const useFeedTab = () => {
  const theme = useTheme()

  const navigatorScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.secondary,
    tabBarStyle: {
      height: 64,
      backgroundColor: darken(0.05, theme.colors.background),
      borderTopColor: theme.colors.background
    }
  }

  const feedOptions: BottomTabNavigationOptions = { tabBarIcon: FeedIcon }

  const filtersOptions: BottomTabNavigationOptions = { tabBarIcon: Tattoo }

  return { navigatorScreenOptions, feedOptions, filtersOptions }
}

export { useFeedTab }
