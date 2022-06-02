import styled, { css } from 'styled-components/native'

import { ISvgWrapperStyleProps } from './types'

import { svgProportion } from '@utils/svgProportion'

const SvgWrapperStyle = styled.View<ISvgWrapperStyleProps>`
  ${props => {
    const { width, height } = svgProportion(props)

    return css`
      width: ${width}px;
      height: ${height}px;
    `
  }};
`

export { SvgWrapperStyle }
