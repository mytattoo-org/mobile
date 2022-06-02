import type { TSvgProportion } from './types'

const svgProportion: TSvgProportion = ({ width, height, viewBox }) => {
  const splittedViewBox = viewBox.split(' ').map(value => Number(value))
  const widthIsBiggest = splittedViewBox[2] > splittedViewBox[3]

  const proportion = widthIsBiggest
    ? splittedViewBox[2] / splittedViewBox[3]
    : splittedViewBox[3] / splittedViewBox[2]

  if (width)
    return widthIsBiggest
      ? { width: width, height: width * proportion }
      : { width: width, height: width / proportion }

  if (height)
    return !widthIsBiggest
      ? { height: height, width: height * proportion }
      : { height: height, width: height / proportion }

  return { width, height }
}

export { svgProportion }
