import theme from "../styles/theme";

import "styled-components";

type TTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
