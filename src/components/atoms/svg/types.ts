import { SvgProps } from 'react-native-svg'

interface ISvgProps {
  color?: string
  width?: number
  height?: number
  svgProps?: SvgProps
}

interface ISvgWrapperProps extends ISvgProps {
  viewBox: string
  children: SvgProps['children']
}

interface ISvgWrapperStyleProps {
  width?: number
  height?: number
  viewBox: string
}

export type { ISvgProps, ISvgWrapperStyleProps, ISvgWrapperProps }
