import Svg, { Path, Rect } from 'react-native-svg'

import { ISvgProps } from '../types'

const Logo = ({ color, height }: ISvgProps) => (
  <Svg width='95' height='123' viewBox='0 0 345 373'>
    <Path
      d='M19.8188 61C-60.2495 187.775 125.076 310.628 171.782 372.805C134.417 207.733 49.3188 212 64.3188 113L19.8188 61Z'
      fill={color}
    />

    <Path
      d='M196.486 123.276L259.773 286.981L20.0082 7.00019C216.659 132.36 137.366 91.1763 299.008 -2.93369e-07L196.486 123.276Z'
      fill={color}
    />

    <Path
      d='M321.225 325.214C352.837 273.488 287.292 104.597 268.781 87.4086C268.781 87.4086 290.781 70.9086 320.781 54.4086C331.313 81.4424 361.453 289.486 321.225 325.214Z'
      fill={color}
    />

    <Rect x='128' width='69' height='69' rx='34.5' fill={color} />
  </Svg>
)

export { Logo }
