import { Platform, StatusBar } from 'react-native'
import { css } from 'styled-components/native'

const androidPaddingSafeArea = () =>
  Platform.OS === 'android' &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `

export default androidPaddingSafeArea
