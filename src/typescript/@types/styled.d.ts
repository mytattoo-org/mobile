/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components'

import theme from '../../styles/theme'

type TTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
