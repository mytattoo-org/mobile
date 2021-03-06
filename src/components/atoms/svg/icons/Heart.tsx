import { Path } from 'react-native-svg'

import type { ISvgProps } from '../types'

import { SvgWrapper } from '@components/atoms/svg'

const Heart = ({ color, ...props }: ISvgProps) => (
  <SvgWrapper viewBox='0 0 31 27' {...props}>
    <Path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 1C4.24655 1 1 4.10651 1 7.93918C1 11.0331 2.26875 18.376 14.7576 25.7988C14.9813 25.9304 15.2381 26 15.5 26C15.7619 26 16.0187 25.9304 16.2424 25.7988C28.7313 18.376 30 11.0331 30 7.93918C30 4.10651 26.7534 1 22.75 1C18.7466 1 15.5 5.20556 15.5 5.20556C15.5 5.20556 12.2534 1 8.25 1Z'
    />
  </SvgWrapper>
)

export default Heart
