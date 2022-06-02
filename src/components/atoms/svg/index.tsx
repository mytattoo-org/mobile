import Svg from 'react-native-svg'

import { SvgWrapperStyle } from './styles'
import { ISvgWrapperProps } from './types'

const SvgWrapper = ({
  width,
  height,
  svgProps,
  children,
  viewBox
}: ISvgWrapperProps) => (
  <SvgWrapperStyle width={width} height={height} viewBox={viewBox}>
    <Svg width='100%' height='100%' viewBox={viewBox} {...(svgProps as any)}>
      {children}
    </Svg>
  </SvgWrapperStyle>
)

export { SvgWrapper }
