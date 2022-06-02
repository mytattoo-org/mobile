import { Path } from 'react-native-svg'

import type { ISvgProps } from '../types'

import { SvgWrapper } from '@components/atoms/svg'

const Feed = ({ color, ...props }: ISvgProps) => (
  <SvgWrapper viewBox='0 0 17 22' {...props}>
    <Path
      fill={color}
      d='M15.625 0.458313H1.04167C0.46637 0.458313 0 0.924683 0 1.49998V3.58331C0 4.15861 0.46637 4.62498 1.04167 4.62498H15.625C16.2003 4.62498 16.6667 4.15861 16.6667 3.58331V1.49998C16.6667 0.924683 16.2003 0.458313 15.625 0.458313Z'
    />

    <Path
      fill={color}
      d='M15.625 17.125H1.04167C0.46637 17.125 0 17.5914 0 18.1667V20.25C0 20.8253 0.46637 21.2917 1.04167 21.2917H15.625C16.2003 21.2917 16.6667 20.8253 16.6667 20.25V18.1667C16.6667 17.5914 16.2003 17.125 15.625 17.125Z'
    />

    <Path
      fill={color}
      d='M15.625 6.70831H1.04167C0.46637 6.70831 0 7.17468 0 7.74998V14C0 14.5753 0.46637 15.0416 1.04167 15.0416H15.625C16.2003 15.0416 16.6667 14.5753 16.6667 14V7.74998C16.6667 7.17468 16.2003 6.70831 15.625 6.70831Z'
    />
  </SvgWrapper>
)

export default Feed