import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { darken } from 'polished'
import { useTheme } from 'styled-components'

import FeedIcon from '@components/atoms/svg/icons/Feed'
import Tattoo from '@components/atoms/svg/icons/Tattoo'

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

  const feedOptions: BottomTabNavigationOptions = {
    tabBarIcon: props => <FeedIcon height={28} {...props} />
  }

  const filtersOptions: BottomTabNavigationOptions = {
    tabBarIcon: props => <Tattoo height={38} {...props} />
  }

  return { navigatorScreenOptions, feedOptions, filtersOptions }
}

export { useFeedTab }
