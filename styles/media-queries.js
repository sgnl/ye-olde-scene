import { css } from 'styled-components'

const sizes = {
  desktop: 1025,
  tablet: 568
}

// iterate through the sizes and create a media template
export const media = Object.entries(sizes).reduce((accumulator, [label, size]) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = size / 16
  accumulator[label] = (...args) => `
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
